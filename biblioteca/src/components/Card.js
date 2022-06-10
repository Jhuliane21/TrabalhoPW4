import React  from 'react';
import './Card.css';
import Axios from 'axios';
import { useState } from 'react';
import CardUnico from './CardUnico';

export default function Card(props){
    const excluir = () =>{
        Axios.delete("http://localhost:3001/livros/remover/" + (props.id), {
        }).then((response) =>{
            console.log(response)
        });
    }
        const mostrarUm = () => {
            Axios.get("http://localhost:3001/livros/" + (props.id), {
            }).then((response) =>{
                console.log(response.data)
            })

        }
        


   return (   
    <div className='card'>
      <h2 onClick={() => mostrarUm()}>{props.id} {props.nome}</h2>
      <button className='button-card' onClick={() => excluir()}>Excluir</button><br/><br/>
      <button type="submit" className='button-card'>Editar</button>
    </div>
   )
}