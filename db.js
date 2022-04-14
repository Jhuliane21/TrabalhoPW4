const Sequelize = require("sequelize");

const sequelize = new Sequelize("biblioteca", "root", "root", {
    dialect: "mysql",
    host: "localhost",
    port: 3306
})

//logging: false
module.exports = sequelize;