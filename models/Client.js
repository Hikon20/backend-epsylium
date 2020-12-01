module.exports = (dbinfo, Sequelize) => {
    return dbinfo.define(
        "Client", {
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
            pseudonyme: {
                type: Sequelize.DataTypes.STRING(55),
                allowNull: false,
                unique: true,
            },
        
           forget: {
               type: Sequelize.DataTypes.STRING(60),
               allowNull:true
           },
            password: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false
            },
            ville: {
                type: Sequelize.DataTypes.STRING(60),
                allowNull: true
            },
            
            cp: {
                type: Sequelize.DataTypes.INTEGER(5),
                allowNull: true
            },
            image: {
                type: Sequelize.DataTypes.TEXT,
                allowNull: true
            },
            Status: {
                type: Sequelize.DataTypes.BOOLEAN
            },
          
          
           
        }, {
            timestamps: true,
            underscored: true
        }
    );
};