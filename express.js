var express = require("express");

var db = require("./db.js");

var express = require("express");
var app = express();


porta = 80;

app.get("/", function(req, res){
    console.log(req.params);
    res.send("Página Inicial");
});

app.use("/livros", require("./livros/rotalivros.js"));

app.listen(porta, ()=>{
    console.log(`servidor rodando na porta ${porta}`);
});