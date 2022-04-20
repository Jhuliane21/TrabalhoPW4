const Livros = (sequelize, DataTypes)=>{
    return sequelize.define( 'Livros',{
        nome: DataTypes.STRING,
        descricao: DataTypes.STRING,
        author: DataTypes.STRING,
    });
};

module.exports = Livros;