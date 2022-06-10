import React  from 'react';
import './Card.css';
import Axios from 'axios';
import { useState } from 'react';

export default function CardUnico(props){


   return (   
    <div className='card'>
      <h2 >{props.id} </h2>
      <h4>{props.nome}</h4>
      <p>{props.descricao}</p>
      <p>{props.author}</p>
      <button className='button-card'>Excluir</button><br/><br/>
      <button type="submit" className='button-card'>Editar</button>
    </div>
   )
}