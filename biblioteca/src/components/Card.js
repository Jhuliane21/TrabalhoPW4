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
      <h2>{props.id} {props.nome}</h2>
        <button className='button-card' onClick={() => excluir()}>Excluir</button>
    </div>
   )
}