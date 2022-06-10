
import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import Card from './components/Card';
import './App.css';
import Formulario from './components/Formulario';
import Emprestar from './components/Formulario_emprestimo';
import PesquisarLivro from './components/pesquisarLivro';




function Inicio() {
 const [listaLivros, setListaLivros] = useState();

 const mostrarInicio = () =>{
  document.getElementById("listaLivros").style.display = "block";
  document.getElementById("cadastrar").style.display = "none";
  document.getElementById("emprestar").style.display = "none";
  document.getElementById("pesquisar").style.display = "none";
}
const mostrarCadastrar = () =>{
  document.getElementById("cadastrar").style.display = "block";
  document.getElementById("listaLivros").style.display = "none";
  document.getElementById("emprestar").style.display = "none";
  document.getElementById("pesquisar").style.display = "none";
}
const mostrarEmprestar = () =>{
  document.getElementById("cadastrar").style.display = "none";
  document.getElementById("listaLivros").style.display = "none";
  document.getElementById("emprestar").style.display = "block";
  document.getElementById("pesquisar").style.display = "block";
}
const mostrarPesquisar = () =>{
  document.getElementById("cadastrar").style.display = "none";
  document.getElementById("listaLivros").style.display = "none";
  document.getElementById("emprestar").style.display = "none";
  document.getElementById("pesquisar").style.display = "block";
}
 useEffect(()=>{
    Axios.get("http://localhost:3001/livros/").then((response)=>(
     setListaLivros(response.data)
    ));
  }, []);
  return (

    <div className="App">
        <nav>
        <ul>
           <li onClick={() => mostrarInicio()}>Inicio</li>
           <li onClick={() => mostrarCadastrar()}>Cadastrar</li>
           <li onClick={() => mostrarEmprestar()}>Emprestar</li>
           <li onClick={() => mostrarPesquisar()}>Procure um livro</li>
       </ul> 
  </nav>
  
    
      <br/>
      <br/>
      <div id="listaLivros">
      {typeof listaLivros !== "undefined" && listaLivros.map((value) => {
        <br/>
          return <Card key={value.id} listaCard = {listaLivros} setListaLivros = {listaLivros} id = {value.id} nome = {value.nome} descricao = {value.descricao} autor = {value.author}></Card>;
      })}
      </div>
      <div id="cadastrar">
      <Formulario></Formulario>
      </div>
      <div id="emprestar">
      <Emprestar></Emprestar>
      </div>
    
    
    </div>
  )
}

export default Inicio;
