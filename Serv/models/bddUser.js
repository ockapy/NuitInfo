const mysql = require('mysql')
const iniparser = require('iniparser')

// récupération des paramètres et préparation de connexion à la BDD
let configDB = iniparser.parseSync('./DB.ini')
let dbUser = mysql.createConnection({
    host:configDB['User']['host'],
    user:configDB['User']['user'],
    password:configDB['User']['password'],
    database:configDB['User']['database']
})

// connexion à la base de données
dbUser.connect((err) => {
    if (!err) console.log('BDD connectée.')
    else console.log('BDD connexion échouée \n Erreur: '+JSON.stringify(err))
})


module.exports = dbUser