
import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import Card from './components/Card';
import './App.css';
import Formulario from './components/Formulario';
import Emprestar from './components/Formulario_emprestimo';
import CardEmprestimo from './components/CardEmprestimo';




function Inicio() {
 const [listaLivros, setListaLivros] = useState();
 const [listaemprestimos, setListaEmprestimos] = useState();

 const mostrarInicio = () =>{
  document.getElementById("listaLivros").style.display = "block";
  document.getElementById("cadastrar").style.display = "none";
  document.getElementById("emprestar").style.display = "none";
 
}
const mostrarCadastrar = () =>{
  document.getElementById("cadastrar").style.display = "block";
  document.getElementById("listaLivros").style.display = "none";
  document.getElementById("emprestar").style.display = "none";

}
const mostrarEmprestar = () =>{
  document.getElementById("cadastrar").style.display = "none";
  document.getElementById("listaLivros").style.display = "none";
  document.getElementById("emprestar").style.display = "block";
  
}



 useEffect(()=>{
    Axios.get("http://localhost:3001/livros/").then((response)=>(
     setListaLivros(response.data)
    ));
  }, []);

  useEffect(()=>{
    Axios.get("http://localhost:3001/emprestimos/").then((response)=>(
     setListaEmprestimos(response.data)
    ));
  }, []);
  return (

    <div className="App">
        <nav>
        <ul>
           <li onClick={() => mostrarInicio()}>Inicio</li>
           <li onClick={() => mostrarCadastrar()}>Cadastrar</li>
           <li onClick={() => mostrarEmprestar()}>Emprestar</li>
        
       </ul> 
  </nav>
  
    
      <br/>
      <br/>
      <div id="listaLivros">
        <h1>Livros Disponíveis:</h1>
          {typeof listaLivros !== "undefined" && listaLivros.map((value) => {
            <br/>
              return <Card key={value.id} listaCard = {listaLivros} setListaLivros = {listaLivros} id = {value.id} nome = {value.nome} descricao = {value.descricao} autor = {value.author}></Card>;
          })}

          <h1>Empréstimos:</h1>
            {typeof listaemprestimos !== "undefined" && listaemprestimos.map((value) => {
              <br/>
                return <CardEmprestimo key={value.id} listaCard = {listaemprestimos} setListaEmprestimos = {listaemprestimos} id = {value.id}  idLivros = {value.idLivro} CpfPessoa = {value.CpfPessoa}></CardEmprestimo>;
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
