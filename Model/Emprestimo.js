const Emprestimos = (sequelize, DataTypes)=>{
    return sequelize.define( 'Emprestimos',{
        idLivro: DataTypes.INTEGER,
        CpfPessoa: DataTypes.STRING,
    });
};

module.exports = Emprestimos;