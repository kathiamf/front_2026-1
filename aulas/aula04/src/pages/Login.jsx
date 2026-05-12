import { useNavigate } from "react-router";
import { useAuth} from "../contexts/AuthContext"

function Login () {
    const {Login} = useAuth();

const navigate = useNavigate();

const handleEntra = () => {
    Login({usename: "kathia@iesb.br", password: "123456"})
    navigate("/");
}

    return (
    <>
    <h1>Login</h1>
    <button onClick={handleEntra}>Entrar</button>
    </>

)}

export default Login;