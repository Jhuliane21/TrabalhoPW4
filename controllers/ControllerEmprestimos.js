
const  {Emprestimos} = require('../Model'); 
const {Router} = require('express');

const router = Router();

router.get('/', async(req, res)=>{
  const emprestimo = await Emprestimos.findAll();
  res.status(200).json(emprestimo);
});
router.get('/:id', async(req, res)=>{
  const {id} = req.params;
  const emprestimo = await Emprestimos.findByPk(id);
  res.status(200).json(emprestimo);

});
router.post('/adicionar', async(req, res)=>{
  const {idLivro, CpfPessoa} = req.body;
  const novoEmprestimo = Emprestimos.create({idLivro, CpfPessoa});
  res.status(200).json({message: 'Cadastrado com sucesso'});
});




module.exports = router;
