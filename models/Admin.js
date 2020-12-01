module.exports = (dbinfo, Sequelize) => {
    return dbinfo.define(
        "Admin", {
            id: {
                type: Sequelize.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            nom: {
                type: Sequelize.DataTypes.STRING(45),
                allowNull: true
            },
            prenom: {
                type: Sequelize.DataTypes.STRING(45),
                allowNull: true
            },
            email: {
                type: Sequelize.DataTypes.STRING(255),
                allowNull: false,
                unique: true,
            },
            password: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false
            },
            image: {
                type: Sequelize.DataTypes.TEXT,
                allowNull: true
            },
            adresse: {
                type: Sequelize.DataTypes.TEXT,
                allowNull: true
            },
            cp: {
                type: Sequelize.DataTypes.INTEGER(5),
                allowNull: true
            },
            ville: {
                type: Sequelize.DataTypes.STRING(60),
                allowNull: true
            }
        }, {
            timestamps: true,
            underscored: true
        }
    );
};