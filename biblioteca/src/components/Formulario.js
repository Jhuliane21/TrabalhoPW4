
import "./Formulario.css";
import { useState } from "react";
import Axios from 'axios';

export default function Formulario(){
    const [value, setValues] = useState();
    const changeValue = (value) =>{
      setValues((prevValue) =>
      ({
          ...prevValue,
          [value.target.name]: value.target.value
      })
      )
    };
    const clickButton = () =>{
        Axios.post("http://localhost:3001/livros/adicionar", {
            nome: value.nome, 
            descricao: value.descricao,
            author: value.author,
        }).then((response) =>{
            console.log(response)
        })

        }
    
   return(
    <div className='card'>
    <div className="register-container">
      <label>Nome do Livro:</label>
      <input type="text" name="nome" onChange={changeValue}/><br/><br/>
      <label>Descrição:</label>
      <input type="text" name="descricao" onChange={changeValue}/><br/><br/>
      <label>Autor do Livro:</label>
      <input type="text" name="author" id="author" onChange={changeValue}/><br/><br/>
      <button onClick={clickButton} className="button-card">
        Cadastrar
      </button>
    </div>
    </div>
   )
}