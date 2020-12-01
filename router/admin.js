const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const db = require("../database/db");


router.post("/register",(req,res) => {
    db.admin.findOne({
        where: {email: req.body.email}
    })
    .then(admin => {
        if(!admin){
            const hash = bcrypt.hashSync(req.body.password,10);
            req.body.password = hash;
            db.admin.create(req.body)
            .then(itemadmin => {
                
                res.status(200).json({
                    message: "Vous devez valider votre mail",
                    email : itemadmin.email
                })
            })
            .catch(err => {
                res.json(err);
            })

        }
        else {
            res.json("cette adresse mail et déja utilisée")
        }
    })
    .catch(err => {
        res.json(err)
    })
});

module.exports = router;