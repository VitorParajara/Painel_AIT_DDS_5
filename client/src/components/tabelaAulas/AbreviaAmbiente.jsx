function AbreviaAmbiente(props){
    const ambiente_vetor = new String(props.ambiente).split('-');
    ambiente_vetor.splice(0,2);
    const nome = ambiente_vetor.join('-');
    return (nome);
}

export default AbreviaAmbiente;