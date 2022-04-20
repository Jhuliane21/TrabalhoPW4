const livrosController = require('./ControllerLivro');
const emprestimoController = require('./ControllerEmprestimos');


module.exports = {
    livros : livrosController,
    emprestimos: emprestimoController
}