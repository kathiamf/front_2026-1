function InputMatricula({matricula, erro, mudaValor}){
    return(
    <>
    <label htmlFor="matricula">Matricula</label>
        <input className="border rounde-lg" 
        type="number" id="matricula" name="matricula" 
        value={matricula}
        onChange={mudaValor}/>
    <p>{erro}</p>
    </>
    );
}

export default InputMatricula;