import Sibebar from "../components/Sidebar";
import Tabela from "../components/Tabela";
import Topbar from "../components/Topbar";

function Faltas(props){
    return(
        <>
             <Sibebar navegaPara={props.navegaPara}/>
            <Main titulo="Minhas Faltas" subtitulo="Histórico de Faltas por Semestre">
               <Tabela titulo="2026.1"/>
               <Tabela titulo="2025.2"/>
               <Tabela titulo="2025.1"/>
            </Main>
        </>
    );
}
export default Faltas;