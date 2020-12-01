module.exports = (dbinfo, Sequelize) => {
    return dbinfo.define(
        "Atelier_creation", {
            id: {
                type: Sequelize.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            
            adresse: {
                type: Sequelize.DataTypes.STRING(70),
                allowNull: true
            },
         telephone: {
                type: Sequelize.DataTypes.STRING(10),
                allowNull: true
            },
            
        }, {
            timestamps: true,
            underscored: true
        }
    );
};