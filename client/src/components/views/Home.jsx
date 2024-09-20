import React from 'react'
import styles from './Home.module.css';
import Cabecalho from '../layout/Cabecalho.jsx';
import TabelaAulas from '../tabelaAulas/TabelaAulas.jsx';
import LateralImagens from '../LateralImagens/LateralImagens.jsx';


function Home() {
  return (
    <>
      <Cabecalho/>
      <TabelaAulas/>
      <LateralImagens/>
    </>
  )
}

export default Home;