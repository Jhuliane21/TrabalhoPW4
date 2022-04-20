const express = require("express");
const bodyParser = require('body-parser');
const controllers = require('./controllers');

const app = express();

app.use(bodyParser.json());

porta = 80;

app.get("/", function(req, res){
    console.log(req.params);
    res.send("Página Inicial");
});

app.use("/livros", controllers.livros);

app.use("/emprestimos", controllers.emprestimos);

app.listen(porta, ()=>{
    console.log(`servidor rodando na porta ${porta}`);
});