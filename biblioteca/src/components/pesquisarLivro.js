
import "./Formulario.css";
import { useState } from "react";
import Axios from 'axios';

export default function PesquisarLivro(){
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
            id: value.id,
            nome: value.nome, 
            descricao: value.descricao,
            author: value.author,
        }).then((response) =>{
            console.log(response)
        })

        }
    
   return(
       <div>
            <h1>Editar o Livro</h1><br/>
            <label>ID:</label><br/>
            <input type="text" value={value.id} onChange={changeValue}></input><br/>
            <label>Nome do Livro:</label>
            <input type="text" name="nome" onChange={changeValue}/><br/><br/>
            <label>Descrição:</label>
            <input type="text" name="descricao" onChange={changeValue}/><br/><br/>
            <label>Autor do Livro:</label>
            <input type="text" name="author" id="author" onChange={changeValue}/><br/><br/>
            <button className="button-card" onClick={clickButton}>Atualizar</button>
       </div>
   
   )
}