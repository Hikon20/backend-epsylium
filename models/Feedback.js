module.exports = (dbinfo, Sequelize) => {
    return dbinfo.define(
        "Feedback", {
            id: {
                type: Sequelize.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            
            date: {
                type: Sequelize.DataTypes.DATE(),
                allowNull: true
            },
            heure: {
                type: Sequelize.DataTypes.TIME(24),
                allowNull: true
            },
            
        }, {
            timestamps: true,
            underscored: true
        }
    );
};