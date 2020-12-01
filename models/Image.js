module.exports = (dbinfo, Sequelize) => {
    return dbinfo.define(
        "Image", {
            id: {
                type: Sequelize.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            
            image: {
                type: Sequelize.DataTypes.STRING(255),
                allowNull: true
            }
        }, {
            timestamps: true,
            underscored: true
        }
    );
};