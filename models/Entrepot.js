module.exports = (dbinfo, Sequelize) => {
    return dbinfo.define(
        "Entrepot", {
            id: {
                type: Sequelize.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            
            adresse: {
                type: Sequelize.DataTypes.STRING(70),
                allowNull: true
            },
            tel: {
                type: Sequelize.DataTypes.STRING(10),
                allowNull: true
            },
            
        }, {
            timestamps: true,
            underscored: true
        }
    );
};