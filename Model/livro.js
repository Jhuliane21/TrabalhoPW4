const Sequelize = require("sequelize");
const banco = require("../db.js");

const Livro = banco.define("livro", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: false
    },
    descricao: {
        type: Sequelize.STRING,
        autoIncrement: false,
        allowNull: false,
        primaryKey: false
    },
    author:{
        type: Sequelize.STRING,
        autoIncrement: false,
        allowNull: false,
        primaryKey: false
    }

})

module.exports = Livro;