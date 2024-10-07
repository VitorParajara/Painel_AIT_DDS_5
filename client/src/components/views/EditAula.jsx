import FormAula from "../formAula/FormAula";
import Navbar from "../layout/Navbar"
import { useState } from "react";
import { useParams } from "react-router-dom";

function EditAula() {
  const {id} = useParams();

  return (
    <div>
      <Navbar/>
      <FormAula titulo='Editar Aula' textoBotao='Salvar' id={id}/>
    </div>
        
        
  )
}

export default EditAula