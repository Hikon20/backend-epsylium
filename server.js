//Express nous permet de créer nos routes
const express = require("express")
//Body-Parser permet de vérifier si les données sont bien en JSON
const bodyparser = require("body-parser")
//Cors = Cross Origin Ressource Sharing: Autorise l'échange des données a travers plateforme et différents domaine
const cors = require("cors")

const port = 3000;
const hostname ="localhost"

const app = express();

app.use(cors());
//On rajoute le .json pour bien le spécifier de vérifier que les données soient en json
app.use(bodyparser.json());
//Tu vas pas changer mon URL, tu vas pas envoyer mes données dans l'url ni ailleurs si j'use Postman les résultas seront que sur Postman
app.use(bodyparser.urlencoded({extended: false}));

app.use("/admin", require("./router/admin"));

app.use("/client", require("./router/client"));

app.use("/produit", require("./router/produit"));





app.listen(port, () =>{

    console.log(`App listening on port http://${hostname}:${port}`);
});