import { useNavigate } from "react-router";
import { useAuth} from "../contexts/AuthContext"

function Login () {
    const {login} = useAuth();

const navigate = useNavigate();

const handleEntra = () => {
    login({username: "kathia@iesb.br", password: "123456"})
    navigate("/");
}

    return (
    <>
    <h1>Login</h1>
    <button onClick={handleEntra}>Entrar</button>
    </>

)}

export default Login;