import Sibebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

function Requerimentos(props) {
    return(
        <>
             <Sibebar navegaPara={props.navegaPara}/>
            <Main titulo="Meus Requerimentos" subtitulo="Faça solicitações online para a secretaria">
            <Tabela/>
            </Main>
        </>
    )
}
export default Requerimentos;