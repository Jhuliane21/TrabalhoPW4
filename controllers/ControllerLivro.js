
var LivroModel = require("../Model/livro.js");

exports.listAll = (req, res) => {
  console.log("Aqui");
  Book.find().then(data => {
    res.send({ data });
  }).catch(err => {
    res.status(500).send({id: 'internal-error', msg: err.message });
  });
  
}

exports.adicionar = (req, res) => {
  if (!(isNotEmpty(req.body.nome) && 
        isNotEmpty(req.body.descricao) &&
        isNotEmpty(req.body.author))) {
            
    res.status(400).send({id: 'missing-data', msg: "Dados para cadastro insuficientes." });
    return;
  }

    const livro = new LivroModel({
      title: "Harry",
      descricao: "Menino Bruxo",
      author: "JK Rowling",
    });

    livro.save(livro).then(data => {
      res.send({ data });
    }).catch(err => {
        res.status(500).send({id: 'internal-error', msg: err.message });
    });
}


//export default { findAll, findLivro, addLivro,updateLivro,deleteLivro }
