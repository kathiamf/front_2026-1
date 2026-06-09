import { useContext } from "react";
import { createContext, useState } from "react";
import { entrar } from "../services/authServices";


const AuthContext = createContext();

function AuthProvider({children}) {
const [usuario, setUsuario] = useState(
    localStorage.getItem("app.token"));
const [logado, setLogado] = useState(false)

const login = async (dados) => {
  const { token, mensagem } = await entrar (dados);
  if (token) {
    setUsuario({email: dados.email, token});
   // setLogado(true);
   localStorage.setItem("app.token", token);
    return
  }
  throw new Error(mensagem);
};

const logout = () => {
setUsuario({});
 localStorage.removeItemItem("app.token");
setLogado(false);
}

    return (
        <AuthContext.Provider value = {{logado, usuario, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
}

function useAuth(){
    return useContext (AuthContext);
}

export {useAuth, AuthProvider};
