import React from 'react';
import './Card.css';



export default function CardEmprestimo(props){
   return (   
    
    <div className='card'>
      <h2>Id: {props.id} </h2>
      <p>Id do Livro:{props.idLivro}</p>
      <p>Cpf da Pessoa: {props.CpfPessoa}</p>

    </div>
   )
}