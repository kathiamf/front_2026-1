import Card from "../components/Card";
import Main from "../components/Main";
import Sibebar from "../components/Sidebar";


function Dashboard (props){

    return(

        <>
            <Sibebar navegaPara={props.navegaPara}/>
            <Main titulo="Olá Aluno" subtitulo="Bem-vindo ao portal do aluno">
                <Card titulo="Mural de Avisos"/>
                <Card titulo="Calendário Acadêmico"/>
                <Card titulo="Minhas Disciplinas"/>
            </Main>
        </>
    );
}

export default Dashboard;