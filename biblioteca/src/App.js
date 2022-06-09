
import React, {useEffect, useState} from 'react';
import Axios from 'axios';
//import Card from './components/listar';
import './App.css';

function App() {
 
 useEffect(()=>{
    Axios.get("http://localhost:3001/livros/").then((response)=>(
     console.log(response.data)
    ));
  }, []);
  return (
    <div className="App">
      
    </div>
  )
}

export default App;
