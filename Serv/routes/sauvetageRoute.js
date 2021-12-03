// création du routeur Express pour ce module
const express = require('express')
const routeur = express.Router()


// Ajout des controllers //
const sauvetageControl = require('../controllers/sauvetageController')

// Enregistrement des routeurs
routeur.get('/', sauvetageControl.accueil)

    .get('/sauveteurs', sauvetageControl.sauveteurs)

    .get('/connexion', sauvetageControl.connexion)

    .post('/connexion/verif', sauvetageControl.verifConnect)

    .get('/admin', sauvetageControl.admin)

    .post('/Sauvetage/sauveteurs/modif', sauvetageControl.modif)

// Exportation //
module.exports = routeur
