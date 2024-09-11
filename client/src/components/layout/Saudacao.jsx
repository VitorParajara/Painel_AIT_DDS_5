import { useEffect,useState } from "react";
import styles from './Saudacao.module.css';

function Saudacao(){
    const[SaudacaoPeriodo, setSaudacaoPeriodo] = useState('');
    
    useEffect(()=>{
        atualizaSaudacao();
        const intervalo = setInterval(atualizaSaudacao,1000);
        return()=>{
            clearInterval(intervalo);
        }
    },[]);
   
    function atualizaSaudacao(){
        const agora = new Date();
        const hora = agora.getHours();
        const dia = agora.getDay();
        let textoSaudacao = '';
        const diaSemana = [
            'Domingo',
            'Segunda-Feira',
            'Terça-Feira',
            'Quarta-Feira',
            'Quinta-Feira',
            'Sexta-Feira',
            'Sabado'
        ];

        textoSaudacao += diaSemana[dia];
        if(hora >= 18){
            textoSaudacao += ' - Boa Noite';
        }
        else{
            textoSaudacao += ' - Boa Tarde';
        }
        setSaudacaoPeriodo(textoSaudacao);
    }

    return(
        <div className={styles.saudacao}>{SaudacaoPeriodo}</div>
    )
}

export default Saudacao;