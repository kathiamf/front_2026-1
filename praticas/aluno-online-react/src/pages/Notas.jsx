import Main from "../components/Main";
import Sibebar from "../components/Sidebar";
import Topbar from "../components/Topbar";


function Notas(props){
    return(
        <>
             <Sibebar navegaPara={props.navegaPara}/>
            <Main titulo="Minhas Notas" subtitulo="Historico por Semestre">
                    <Tabela titulo="2026.1" colunas={[]} dados={[]}/>
                    <Tabela titulo="2025.2" colunas={[]} dados={[]}/>
                    <Tabela titulo="2025.1" colunas={[]} dados={[]}/>
            </Main>
        </>
    );
}
export default Notas;