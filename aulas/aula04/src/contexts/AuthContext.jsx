import { useContext } from "react";
import { createContext, useState } from "react";


const AuthContext = createContext();

function AuthProvider({children}) {
const [usuario, setUsuario] = useState({});
const [logado, setLogado] = useState(true)

const login = (dados) => {
    //cham a API backend
    setUsuario({nome: "Kathia"})
    setLogado(true);
}

const logout = () => {
setUsuario({});
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
