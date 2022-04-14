const Livro = require("../Model/livro.js");




//router.post("/adicionar", livros.addLivro);
//router.delete("/excluir", livros.deleteLivro);
//router.put("/editar", livros.updateLivro);
//router.get("/:id", livros.findLivro)

module.exports = app => {
    const livros = require("../controllers/ControllerLivro.js");

  
    var router = require("express").Router();
    
    router.get('/', livros.listAll);

    router.post('/adicionar', livros.adicionar);
    
    //app.use('/api/book', router);
};