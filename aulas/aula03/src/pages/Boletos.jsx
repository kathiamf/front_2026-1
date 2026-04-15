import Sibebar from "../components/Sidebar";
import Tabela from "../components/Tabela";
import Topbar from "../components/Topbar";

function Boletos(props) {

    return(
     <>
         <Sibebar navegaPara={props.navegaPara}/>
        <Main titulo="Meus Boletos" subtitulo="Histórico de Pagemanto">
           <Tabela colunas={[]} dados={[]}/>
        </Main>
    </>
    );
}
export default Boletos;