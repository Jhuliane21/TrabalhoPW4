const Sequelize = require("sequelize");
const banco = require("./db.js");

const Cliente = banco.define("cliente", {
    id: {
        type: Sequelize.INTEGER,//vai ser o cpf
        autoIncrement: false,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: false
    },
    

})

module.exports = Cliente;