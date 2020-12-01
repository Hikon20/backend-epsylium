module.exports = (dbinfo, Sequelize) => {
    return dbinfo.define(
        "Commande", {
            id: {
                type: Sequelize.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            
            datecommande: {
                type: Sequelize.DataTypes.STRING(70),
                allowNull: true
            },
            numero: {
                type: Sequelize.DataTypes.STRING(70),
                allowNull: true
            },
            
        }, {
            timestamps: true,
            underscored: true
        }
    );
};