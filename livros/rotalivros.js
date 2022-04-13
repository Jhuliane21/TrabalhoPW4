const router = require("express").Router();

router.get("/", (req, res)=>{
    res.send("informações sobre livros");
})
router.get("/livros", function(req, res){
    res.send("Listando todos os livros");
});
router.get("/adicionar", function(req, res){
    res.send("Adicionando novos livros");
});
router.get("/excluir", function(req, res){
    res.send("Excluindo livros");
});
router.get("/editor", function(req, res){
    res.send("Edição de um livros");
});
router.get("/emprestimo", function(req, res){
    res.send("Realizar o empréstimo de um livros");
});
router.get("/ListaEmprestados", function(req, res){
    res.send("Listando todos os livros emprestados");
});
router.get("/ListaDisponiveis", function(req, res){
    res.send("Listando todos os livros disponíveis para empréstimo");
});
router.get("/livros/:genero", function(req, res){
    console.log(req.params);
    if(req.params.genero === "romance"){
        res.send("Listando os livros de Romance");
    }else if(req.params.genero === "misterio"){
        res.send("Listando os livros de Mistério");
    }else if(req.params.genero === "fantasia"){
        res.send("Listando os livros de Fantasia");
    }else{
        res.send("Gênero não encontrado!");
    }


});
router.get("/:nome", (req, res) => {
    res.send(`informações sobre o livro ${req.params.nome}`);
})

module.exports = router;