import React from 'react'
import Navbar from '../layout/Navbar'
import { useState } from 'react'

function CadastroAula() {
    const [dataAula, setDataAula] = useState('');
    const [horaInicio, setHoraInicio] = useState('');
    const [horaFim, setHoraFim] = useState('');
    const [turma, setTurma] = useState('');
    const [intrutor, setIntrutor] = useState('');
    const [uc, setUC] = useState('');
    const [ambiente, setAmbiente] = useState('');
    const [infoAula, setInfoAula] = useState({ dataAula, horaInicio, horaFim, turma, intrutor, uc, ambiente });


    function cadastrarAula(e) {
        e.preventDefault();
        console.log(dataAula)
    }

    return (
        <div>
            <Navbar />
            {/* sm -> small/ md é medium/ lg é grande.  Tela divida em 12 partes, small first (pequeno primeiro) */}
            <div className='container col-sm-12 col-md-6 col-lg-3 mt-3'>
                <h2 className='text-center'>Cadastro Aula</h2>
                <form onSubmit={cadastrarAula}>
                    <form className='form-label' htmlFor="">Data:</form>
                    <input className='form-control' type="date" value={dataAula} onChange={(e) => (setDataAula(e.target.value))} />

                    <form className='form-label' htmlFor="">Hora Início:</form>
                    <input className='form-control' type="time" value={horaInicio} onChange={(e) => (setHoraInicio(e.target.value))} />

                    <form className='form-label' htmlFor="">Hora Fim:</form>
                    <input className='form-control' type="time" value={horaFim} onChange={(e) => (setHoraFim(e.target.value))} />

                    <form className='form-label' htmlFor="">Turma:</form>
                    <input className='form-control' type="text" value={turma} onChange={(e) => (setTurma(e.target.value))} />

                    <form className='form-label' htmlFor="">Instrutor:</form>
                    <input className='form-control' type="text" value={intrutor} onChange={(e) => (setIntrutor(e.target.value))} />

                    <form className='form-label' htmlFor="">Unidade Curricular:</form>
                    <input className='form-control' type="text" value={uc} onChange={(e) => (setUC(e.target.value))} />

                    <form className='form-label' htmlFor="">Ambiente:</form>
                    <input className='form-control' type="text" value={ambiente} onChange={(e) => (setAmbiente(e.target.value))} />

                    <a className='btn btn-danger mt-3 float-start' href="">Cancelar</a>
                    <button className='btn btn-success mt-3 float-end' type='submit'>Salvar</button>
                </form>
            </div>
        </div>

    )
}

export default CadastroAula