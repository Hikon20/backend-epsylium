module.exports = (dbinfo, Sequelize) => {
    return dbinfo.define(
        "Candidat", {
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
            adresse: {
                type: Sequelize.DataTypes.TEXT,
                allowNull: true
            },
            tel: {
                type: Sequelize.DataTypes.STRING(10),
                allowNull: false,
                unique: true,
            },
            email: {
                type: Sequelize.DataTypes.STRING(255),
                allowNull: false,
                unique: true,
            },
         
    
            ville: {
                type: Sequelize.DataTypes.STRING(60),
                allowNull: true
            },
            
            cp: {
                type: Sequelize.DataTypes.INTEGER(5),
                allowNull: true
            },
            
          
           
        }, {
            timestamps: true,
            underscored: true
        }
    );
};