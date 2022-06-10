
const  {emprestimos} = require('../Model'); 
const {Router} = require('express');

const router = Router();

router.get('/', async(req, res)=>{
  const emprestimo = await emprestimos.findAll();
  res.status(200).json(emprestimo);
});
router.get('/:id', async(req, res)=>{
  const {id} = req.params;
  const emprestimo = await emprestimos.findByPk(id);
  res.status(200).json(emprestimo);

});

router.post('/emprestar', async(req, res)=>{
  const {idLivro, CpfPessoa} = req.body;
  const novoEmprestimo = emprestimos.create({idLivro, CpfPessoa});
  res.status(200).json({message: 'Emprestado com sucesso'});
});




module.exports = router;
