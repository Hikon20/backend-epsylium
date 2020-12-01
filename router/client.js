const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const db = require("../database/db");
process.env.SECRET_KEY = "secret"; // SECRET_KEY permet de stocker des données de façon sûre, secret est notre valeur

/* cette route permet à un utilisateur de créer un compte */
router.post("/register", (req, res) => {
    db.client.findOne({
            where: { email: req.body.email }
        })
        .then(client => {
            if (!client) {
                const hash = bcrypt.hashSync(req.body.password, 10);
                req.body.password = hash;
                db.client.create(req.body)
                    .then(itemclient => {
                            var nodemailer = require("nodemailer");
    
                            var transporter = nodemailer.createTransport({
                                service: "gmail",
                                auth: {
                                    user: "xwarthankx@gmail.com",
                                    pass: "nhzkanos1896"
                                },
                            });
    
                            var mailOptions = {
                                from: "xwarthankx@gmail.com",
                                to: itemclient.email,
                                subject: "Bienvenue chez Epsylium Shop",
                                //text: "http://localhost:3000/user/pwd/" + item.forget,
                                html: "<a href=http://localhost:8080/client/email/" + itemclient.email + ">Veuillez validez votre email</a>"
                            };
    
                            transporter.sendMail(mailOptions, function(error, info) {
                                if (error) {
                                    res.json(error);
                                    console.log(error);
                                } else {
                                    console.log("email sent" + info.response);
                                    res.json("email sent" + info.response);
                                }
                            });
                    })
                    
                    .catch(err => {
                        res.json(err);
                    })
                    
            } else {
                res.json("cette adresse mail est déjà utilisée");
            }
        })
        .catch(err => {
            res.json(err);
        })
});
router.post("/login", (req, res) => {
    db.client.findOne({ where: { email: req.body.email } })
        .then(client => {
            if (client.Status == true) {
                if (bcrypt.compareSync(req.body.password, client.password)) {
                    let clientdata = {
                       password:client.password,
                        email: client.email
                    };
                    let token = jwt.sign(clientdata, process.env.SECRET_KEY, {
                        expiresIn: 1440,
                    })
                    res.status(200).json({ token: token });
                } else {
                    res.json("error mail or error password");
                }
            } else {
                res.json({
                    message: "vous devez valider votre mail",
                });
            }


        })
        .catch(err => {
            res.json(err);
        })

})

/* cette route permet à l'utilisateur de recevoir un lien pour changer son mdp oublié */
router.post("/forgetpassword", (req, res) => {
    var randtoken = require('rand-token');
    var token = randtoken.generate(16);

    db.client.findOne({
        where: { email: req.body.email }
    })
        .then(client => {
            if (client) {
                client.update({
                        forget: token
                    }).then(item => {
                        var nodemailer = require("nodemailer");

                        var transporter = nodemailer.createTransport({
                            service: "gmail",
                            auth: {
                                user: "xwarthankx@gmail.com",
                                pass: "nhzkanos1896"
                            },
                        });

                        var mailOptions = {
                            from: "xwarthankx@gmail.com",
                            to: item.email,
                            subject: "Sending Email using Node.js",
                            //text: "http://localhost:3000/user/pwd/" + item.forget,
                            html: "<a href=http://localhost:8080/client/pwd/" + item.forget + ">Mettre à jour le mot de passe</a>"
                        };

                        transporter.sendMail(mailOptions, function(error, info) {
                            if (error) {
                                res.json(error);
                                console.log(error);
                            } else {
                                console.log("email sent" + info.response);
                                res.json("email sent" + info.response);
                            }
                        });
                    })
                    .catch(err => {
                        res.json(err)
                    })
            } else {
                res.status(404).json("utilisateur non trouvé");
            }
        })
        .catch(err => {
            res.json(err)
        })
});
router.post("/updatepassword", (req, res) => {

    db.client.findOne({
            where: { forget: req.body.forget }
        })
        .then(client => {
            if (client) {

                const hash = bcrypt.hashSync(req.body.password, 10);
                req.body.password = hash;
                client.update({
                        password: req.body.password,
                        forget: null

                    })
                    .then(() => {
                        res.json({
                            message: "Votre mot de passe est mis à jour"
                        })
                    })
                    .catch(err => {
                        res.json(err);
                    })
            } else {
                res.json("lien non valide")
            }
        })
        .catch(err => {
            res.json(err);
        })
});


router.post("/validemail", (req, res) => {
    db.client.findOne({
            where: { email: req.body.email }
        }).then(client => {
            if (client) {
                if (client.Status !== 1) {
                    client.update({
                            Status: 1
                        })
                        .then(() => {
                            res.json({
                                message: "votre email est validé ggggggggggggggggggggggggggggggg"
                            })
                        })
                        .catch(err => {
                            res.json(err);
                        })
                } else {
                    res.json("votre mail est déja validé")
                }
            } else {
                res.status(404).json("client pas trouvé!")
            }
        })
        .catch(err => {
            res.json(err)
        })
});




module.exports = router;