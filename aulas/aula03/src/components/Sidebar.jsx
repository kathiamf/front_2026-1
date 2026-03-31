import logo from "../assets/learn-svgrepo-com.svg";
import Menu from "./Menu";

function Sibebar(){

    return( 
    <aside className="hidden md:block bg-gray-300">
        <header className="flex flex-row">
            <img src={logo} alt="imagem logo"/>
            <h1>Aluno Online</h1>
            </header>
            <Menu/>
    </aside>
    );
}

export default Sibebar;