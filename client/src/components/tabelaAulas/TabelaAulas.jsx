import { useEffect, useState } from "react"

function TabelaAulas() {
    const [aulas, setAulas] = useState([]);

    useEffect(() => {
        baixarAulas();
    }, [])

    async function baixarAulas() {
        try {
            const resposta = await fetch('http://localhost:5000/aulas', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!resposta) {
                throw new Error('Erro ao buscar aulas');
            }
            const consulta = await resposta.json();
            setAulas(consulta);

        } catch (error) {
            console.log('Erro ao consultar aulas', error);
        }
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Início</th>
                        <th>Fim</th>
                        <th>Turma</th>
                        <th>Instrutor</th>
                        <th>Unidade Curricular</th>
                        <th>Ambiente</th>
                    </tr>
                </thead>
                <tbody>
                    {aulas.map((aula) => (
                        <tr>
                            <td>{aula.data_hora_inicio}</td>
                            <td>{aula.data_hora_fim}</td>
                            <td>{aula.turma}</td>
                            <td>{aula.instrutor}</td>
                            <td>{aula.unidade_curricular}</td>
                            <td>{aula.ambiente}</td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )
}

export default TabelaAulas