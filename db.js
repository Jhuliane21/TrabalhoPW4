const Sequelize = require("sequelize");
const sequelize = new Sequelize("livraria", "root", "123456", {
    dialect: "mysql",
    host: "localhost",
    port: 3306
})
//logging: false
module.exports = sequelize;