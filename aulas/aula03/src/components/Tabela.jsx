function Tabela(props) {
    <>
    <h3>{props.titulo}</h3>
    <table>
        <head>
            <th>
                <td>Coluna 1</td>
                <td>Coluna 2</td>
                <td>Coluna 3</td>
            </th>
        </head>

        <tbody>
            <tr>
                <td>Valor 1</td>
                <td>Valor 2</td>
                <td>Valor 3</td>
            </tr>
        </tbody>
    </table>

    </>
}

export default Tabela;