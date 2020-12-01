module.exports = (dbinfo, Sequelize) => {
    return dbinfo.define(
        "Image", {
            id: {
                type: Sequelize.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            
            nom: {
                type: Sequelize.DataTypes.STRING(70),
                allowNull: true
            },
            typecategorie: {
                type: Sequelize.DataTypes.STRING(70),
                allowNull: true
            },
            
        }, {
            timestamps: true,
            underscored: true
        }
    );
};