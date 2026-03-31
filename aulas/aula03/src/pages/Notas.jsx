import Sibebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

function Notas(){
    return(
        <>
            <Sibebar/>
            <main>
                <Topbar/>
                <h2>Minhas Notas</h2>
            </main>
        </>
    );
}
export default Notas;