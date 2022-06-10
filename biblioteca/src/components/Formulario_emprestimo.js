
import "./Formulario.css";
import { useState } from "react";

export default function Emprestar(){

   return(
    <div className="container-cadastro">
        <form>
            <label>Id do livro:</label><br/>
            <input type="text" name="nome" className="cadastro--nome" ></input><br/>
            <label>Cpf Cliente:</label><br/>
            <input type="text" name="descricao" className="cadastro--descricao" ></input><br/>
            <button className="cadastro--button">Emprestar</button>
        </form>
    </div>
   )
}