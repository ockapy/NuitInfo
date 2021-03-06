const mysql = require('mysql')
const iniparser = require('iniparser')

// récupération des paramètres et préparation de connexion à la BDD
let configDB = iniparser.parseSync('./DB.ini')
let dbSauvetage = mysql.createConnection({
    host:configDB['Sauvetage']['host'],
    user:configDB['Sauvetage']['user'],
    password:configDB['Sauvetage']['password'],
    database:configDB['Sauvetage']['database']
})

// connexion à la base de données
dbSauvetage.connect((err) => {
    if (!err) console.log('BDD connectée.')
    else console.log('BDD connexion échouée \n Erreur: '+JSON.stringify(err))
})


module.exports = dbSauvetage