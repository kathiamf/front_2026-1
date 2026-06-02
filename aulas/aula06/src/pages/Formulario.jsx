import { useState } from "react";
import{useForm} from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { criar } from "../services/produtoService";

function Formulario() {
    const { erro, setErro } = useState();
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();

    const salvar = async (dados) => {
        try {
            await criar (dados);
            navigate("/produtos");
        } catch (error) {
            setErro(error.message)
        }
    }


    return (
    <>
    <h1>Cadastro de Produto</h1>
    <p>{erro}</p>

    <form onSubmit={handleSubmit(salvar)}>
    <div>
        <input type="text" placeholder="Nome do Produto" {...register("nome")}/>
    </div>
    <div>
        <input type="number" placeholder="Preço 0.00" {...register("preço")}/>
    </div>
    <div>
        <input type="text" placeholder="Unidade" {...register("unidade")}/>
    </div>
    <div>
        <Link to ="/produtos">Cancelar</Link>
    </div>
     <div>
        <button type="submit">Salvar</button>
    </div>
    </form>
    </>
    );
}

export default Formulario;