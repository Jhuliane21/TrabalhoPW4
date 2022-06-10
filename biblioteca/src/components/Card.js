import React from 'react';
import './Card.css';
import Axios from 'axios';


export default function Card(props){


    const excluir = () =>{
        Axios.delete("http://localhost:3001/livros/remover/" + (props.id), {
        }).then((response) =>{
            console.log(response)
        });
    }
   
   return (   
    
    <div className='card'>
      <h2>Id: {props.id} </h2>
      <p>Nome do Livro:{props.nome}</p>
      <p>Descrição: {props.descricao}</p>
      <p>Autor: {props.autor}</p>
        <button className='button-card' onClick={() => excluir()}>Excluir</button>
    </div>
   )
}