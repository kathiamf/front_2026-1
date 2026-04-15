import Card from "./Card";
import Topbar from "./Topbar";
import Tabelas from "./Tabela";

function Main(props){
    return (
        <main className="flex flex-colmax-w-screen">
            <Topbar titulo={props.titulo}/>
            <h2>{props.subtitulo}</h2>
            <section>
                {props.children}
            </section>
            
        </main>
    );
}

export default Main;