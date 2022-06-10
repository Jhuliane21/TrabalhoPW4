
import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import Card from './components/Card';
import './App.css';
import Formulario from './components/Formulario';



function App() {
 const [listaLivros, setListaLivros] = useState();
  
 useEffect(()=>{
    Axios.get("http://localhost:3001/livros/").then((response)=>(
     setListaLivros(response.data)
    ));
  }, []);
  return (

    <div className="App">
      <nav>
        <ul>
           <li>Inicio</li>
           <li>Cadastrar</li>
           <li>Emprestar</li>
       </ul> 
  </nav>
      <br/>
      <br/>
      {typeof listaLivros !== "undefined" && listaLivros.map((value) => {
        <br/>
          return <Card key={value.id} listaCard = {listaLivros} setListaLivros = {listaLivros} id = {value.id} nome = {value.nome} descricao = {value.descricao} autor = {value.author}></Card>;
      })}
   
    </div>
  )
}

export default App;
