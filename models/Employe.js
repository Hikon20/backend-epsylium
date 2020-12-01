module.exports = (dbinfo, Sequelize) => {
    return dbinfo.define(
        "Employe", {
            id: {
                type: Sequelize.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            
            nom: {
                type: Sequelize.DataTypes.STRING(70),
                allowNull: true
            },
            prenom: {
                type: Sequelize.DataTypes.STRING(70),
                allowNull: true
            },
            adresse: {
                type: Sequelize.DataTypes.STRING(70),
                allowNull: true
            },
            email: {
                type: Sequelize.DataTypes.STRING(70),
                allowNull: true
            },
            tel: {
                type: Sequelize.DataTypes.STRING(10),
                allowNull: true
            },
            poste: {
                type: Sequelize.DataTypes.STRING(70),
                allowNull: true
            },
            
        }, {
            timestamps: true,
            underscored: true
        }
    );
};