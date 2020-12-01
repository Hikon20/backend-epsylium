module.exports = (dbinfo, Sequelize) => {
    return dbinfo.define(
        "Produit", {
            id: {
                type: Sequelize.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            ref: {
                type: Sequelize.DataTypes.INTEGER,
                allowNull:false
            },
            nom: {
                type: Sequelize.DataTypes.STRING(45),
                allowNull: true
            },
            Status: {
                type: Sequelize.DataTypes.BOOLEAN,
                allowNull: true
            },
            description: {
                type: Sequelize.DataTypes.TEXT,
            },
            taille: {
                type: Sequelize.DataTypes.STRING(50),
                allowNull: true
            },
            poid: {
                type: Sequelize.DataTypes.DECIMAL(20.5),
                allowNull: true
            },
            typeproduit: {
                type: Sequelize.DataTypes.STRING(100),
                allowNull: true
            },
            couleur: {
                type: Sequelize.DataTypes.STRING(100),
                allowNull: true
            },
            matiere: {
                type: Sequelize.DataTypes.STRING(100),
                allowNull: true
            },

          
        }, 
        {
            timestamps: true,
            underscored: true
        }
    );
};