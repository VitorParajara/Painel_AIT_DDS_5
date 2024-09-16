import React from 'react'
import styles from './Home.module.css';
import Cabecalho from '../layout/Cabecalho.jsx';
import TabelaAulas from '../tabelaAulas/TabelaAulas.jsx';


function Home() {
  return (
    <>
      <Cabecalho/>
      <TabelaAulas/>
    </>
  )
}

export default Home;