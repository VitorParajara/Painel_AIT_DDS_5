import FormAula from "../formAula/FormAula";
import Navbar from "../layout/Navbar"
import { useState } from "react";

function CadastroAula() {

  async function cadastrarAula(infoAula) {
    try {
      const resposta = await fetch('http://localhost:5000/aulas', {
        method: 'POST',
        headers: { 'content-Type': 'application/json' },
        body: JSON.stringify(infoAula)
      });
      if (!resposta.ok) {
        console.log('Erro ao cadastrar')
      }
      else {
        alert('Aula cadastrada')
      }
    } catch (error) {
      console.error('Erro ao cadastrar', error)
    }
  }


  return (
    <div>
      <Navbar />
      <FormAula titulo='Cadastrar Aula'
      textoBotao='Cadastrar'
      handleSubmit={cadastrarAula}
      tipo='cadastrada'/>
    </div>

  )
}

export default CadastroAula