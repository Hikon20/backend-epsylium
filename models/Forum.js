module.exports = (dbinfo, Sequelize) => {
    return dbinfo.define(
        "Forum", {
            id: {
                type: Sequelize.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            
            Categorie: {
                type: Sequelize.DataTypes.STRING(70),
                allowNull: true
            },
         Nom: {
                type: Sequelize.DataTypes.STRING(10),
                allowNull: true
            },
            
        }, {
            timestamps: true,
            underscored: true
        }
    );
};