
import "./Formulario.css";
import { useState } from "react";
import Axios from 'axios';

export default function Emprestar(){
    const [value, setValues] = useState();
    const clickButton = () =>{
        Axios.post("http://localhost:3001/emprestimos/emprestar", {
            nome: value.nome, 
            descricao: value.descricao,
            author: value.author,
        }).then((response) =>{
            console.log(response)
        })

        }

        const changeValue = (value) =>{
            setValues((prevValue) =>
            ({
                ...prevValue,
                [value.target.name]: value.target.value
            })
            )
          };
   return(
    <div className='card'>
    <div className="register-container">
        <h1>Realizar Empestimo</h1>
            <label>Cpf Cliente:</label>
            <input type="text" name="cpf" onChange={changeValue}/><br/><br/>
            <label>Id do Livro:</label>
            <input type="text" name="id" onChange={changeValue}/><br/><br/>
            <button onClick={clickButton} className="button-card"> Cadastrar</button>
    </div>
    </div>
   )
}