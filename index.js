const express = require("express");
const bodyParser = require('body-parser');
const controllers = require('./controllers');
i18n = require("i18n");

const app = express();

app.use(bodyParser.json());

porta = 80;

app.use(i18n.init);

i18n.configure({
    locales: ['pt', 'en'],
    directory: './traducoes',
    defaultLocale: "pt",
    autoReload: true
})

app.get("/", function(req, res){
    console.log(req.params);
    res.send(res.__('ola'));
});

app.use("/livros", controllers.livros);

app.use("/emprestimos", controllers.emprestimos);

app.listen(porta, ()=>{
    console.log(`servidor rodando na porta ${porta}`);
});