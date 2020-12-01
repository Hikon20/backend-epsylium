//Permet de créer la db, le CRUD, nos tables, les relations...
const Sequelize = require("sequelize");

const db = {};

const dbinfo = new Sequelize("epsylium-shop", "root", "",{
    host: "localhost",
    dialect: "mysql",
    port: "3306",
    pool:{
        max: 5,
        min: 0,
    }
});

dbinfo.authenticate()
.then(() =>{
    console.log("Welcome")
})
.catch((err) => {
console.error("Try again !:", err);
});


db.admin = require("../models/Admin")(dbinfo, Sequelize);
db.atelier_creation = require("../models/Atelier_Creation")(dbinfo, Sequelize);
db.candidat = require("../models/Candidat")(dbinfo, Sequelize);
db.categorie = require("../models/Categorie")(dbinfo, Sequelize);
db.client = require("../models/Client")(dbinfo, Sequelize);
db.commande = require("../models/commande")(dbinfo, Sequelize);
db.employe = require("../models/Employe")(dbinfo, Sequelize);
db.entrepot = require("../models/Entrepot")(dbinfo, Sequelize);
db.feedback = require("../models/Feedback")(dbinfo, Sequelize);
db.forum = require("../models/Forum")(dbinfo, Sequelize);
db.image = require("../models/Image")(dbinfo, Sequelize);
db.livraison = require("../models/Livraison")(dbinfo, Sequelize);
db.paiement = require("../models/Paiement")(dbinfo, Sequelize);
db.poste = require("../models/Poste")(dbinfo, Sequelize);
db.produit = require("../models/Produit")(dbinfo, Sequelize);
db.retour_produit = require("../models/Retour_Produit")(dbinfo, Sequelize);
db.statistique = require("../models/Statistique")(dbinfo, Sequelize);



// *hasOne - ajoute une clé étrangère aux mixins d'association cible et singulier à la source.
/*appartient à - ajoute une clé étrangère et des mixins d'association singuliers à la source.
*hasMany - ajoute une clé étrangère aux mixins d'association cible et plurielle à la source.
*appartientToMany - crée une association N: M avec une table de jointure et ajoute plusieurs mixins d'association à la source. La table de jonction est créée avec sourceId et targetId.
  ** Démarrer la relation **/

  //Belongtomany veux dire que la table devient intermediaire on lui donne donc un verbe donc 1,N des deux coter
 //Hasmany veux dire que la table premiere quand l'on écris db. donne sa foreignkey a cel qu'on cible 1,N
//Hasone veux dire que les clef primaire s'echange entre elles 1,1
//hasmany through veux dire que il y un max N des deux coter donc une table intermediaire se crée 
//belongto veux dire que N,1

//1.N -1.N
db.client.belongsToMany(db.produit, {through: "Consulter", foreignKey: "clientId"});
db.produit.belongsToMany(db.client, {through: "Consulter", foreignKey: "produitId"});

db.produit.belongsToMany(db.commande, {through: "Stock", foreignKey: "produitId"});
db.commande.belongsToMany(db.produit, {through: "Stock", foreignKey: "commandeId"});
//1.N
db.client.hasMany(db.forum, {foreignKey: "clientId"});
db.client.hasMany(db.poste, {foreignKey: "clientId"});
db.client.hasMany(db.livraison, {foreignKey : "clientId"});
db.client.hasMany(db.feedback, {foreignKey : "clientId"});
db.client.hasMany(db.commande, {foreignKey : "clientId"});
db.poste.hasMany(db.forum, {foreignKey: "posteId"});

//1.N
db.produit.hasMany(db.image, {foreignKey: "produitId"});
db.produit.hasMany(db.atelier_creation, {foreignKey: "produitId"});
db.produit.hasMany(db.entrepot, {foreignKey: "produitId"});
db.produit.hasMany(db.commande, {foreignKey: "produitId"});
db.produit.hasMany(db.retour_produit, {foreignKey: "produitId"});
db.categorie.hasMany(db.produit, {foreignKey: "categorieId"});
db.statistique.hasMany(db.produit, {foreignKey: "statistiqueId"});
db.livraison.hasMany(db.commande, {foreignKey: "livraisonId"});
db.atelier_creation.hasMany(db.employe, {foreignKey:"atelier-creationId"});
db.candidat.hasMany(db.atelier_creation, {foreignKey: "candidatId"})
//1.1
db.commande.hasOne(db.paiement, {foreignKey: "commandeId"});
db.paiement.hasOne(db.commande, {foreignKey: "paiementId"});





db.dbinfo = dbinfo;
db.Sequelize = Sequelize;

//dbinfo.sync({force: true});

module.exports = db;

