import { useParams } from "react-router";
import{ useForm } from"react-hook-form";

function Perfil() {
  const { id } = useParams ();
  const {register, handleSubmit, formState: {errors}} = useForm();

  const onSalvar = (data) => {
    console.log(data)
  }

  const validadores ={
    nome:{
      required: "Nome é obrigatorio",
      minLength: {value: 3, message: "Nome deve ter mais de 2 caracteres"}
    },

    email:{
      required: "Email é obrigatorio",
      
    },

    nascimento:{ 
      validade: (value) => Date.parse(value) < Date.now() || " Data Invalida",
    },

    telefone:{
      min: {value: 0, message: "Telefone é um numero"},
      pattern: {
        value: /^\(?[1-9]{2}\)? ?9[0-9]{4}-?[0-9]{4}$/,
        message: "Telefone invalido",
      }, 
    },
  };


  return (
    <>
      <h1>Página do Usuário {id} </h1>
      <form onSubmit={handleSubmit(onSalvar)}>

        <div>
        <label htmlFor="nome">Nome</label>
        <input type="text" {...register("nome", validadores.nome)}/>
        {errors?.nome && <p>{errors.nome.message}</p>}
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input type="email" {...register("email", validadores.email)}/>
        {errors?.email && <p>{errors.email.message}</p>}
        </div>

      <div>
        <label htmlFor="nascimento">Data de Nascimento</label>
        <input type="date" {...register("nascimento", validadores.nascimento)}/>
        {errors?.nascimento && <p>{errors.nascimento.message}</p>}
        </div>

        <div>
        <label htmlFor="telefone">Telefone</label>
        <input type="tel" {...register("telefone", validadores.telefone)}/>
        {errors?.telefone && <p>{errors.telefone.message}</p>}
        </div>

        <button>Salvar</button>
        </form>
    </>

  );
}

export default Perfil;