module.exports = (dbinfo, Sequelize) => {
    return dbinfo.define(
        "Statistique", {
            id: {
                type: Sequelize.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            
            nom: {
                type: Sequelize.DataTypes.STRING(70),
                allowNull: true
            },
            tauxventeproduit: {
                type: Sequelize.DataTypes.STRING(70),
                allowNull: true
            },
           tauxvisiteur: {
                type: Sequelize.DataTypes.STRING(70),
                allowNull: true
            },
            
        }, {
            timestamps: true,
            underscored: true
        }
    );
};