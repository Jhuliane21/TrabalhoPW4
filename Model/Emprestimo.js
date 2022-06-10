const emprestimos = (sequelize, DataTypes)=>{
    return sequelize.define( 'emprestimos',{
        idLivro: DataTypes.INTEGER,
        CpfPessoa: DataTypes.STRING,

    });
};

module.exports = emprestimos;