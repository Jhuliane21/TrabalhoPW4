
const  {Livros} = require('../Model'); 
const {Router} = require('express');

const router = Router();

router.get('/', async(req, res)=>{
  const livros = await Livros.findAll();
  res.status(200).json(livros);
});

router.get('/:id', async(req, res)=>{
  const {id} = req.params;
  const livros = await Livros.findByPk(id);
  res.status(200).json(livros);

});
router.post('/adicionar', async(req, res)=>{
  const {nome, descricao, author} = req.body;
  const novoLivro = Livros.create({nome, descricao, author});
  res.status(200).json({message: 'Cadastrado com sucesso'});
});

router.delete('/remover/:id', async(req, res)=>{
  await Livros.destroy({
    where:{
      id: req.params.id,
    },
  })
  res.status(200).json({message: 'Excluido com sucesso.'})
});

router.put('/editar/:id', async(req, res)=>{
  const nome = req.params.nome;
  const descricao = req.params.descricao;
  const author = req.params.author;
  await Livros.update(
    {nome, descricao, author},
    {
        where: {id: req.params.id}
    }
  );
  res.status(200).json({message: 'Editado com sucesso'})
});

module.exports = router;
