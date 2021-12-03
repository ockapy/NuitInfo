const mysql = require('mysql')
const iniparser = require('iniparser')

// récupération des paramètres et préparation de connexion à la BDD
let configDB = iniparser.parseSync('./DB.ini')
let dbCommu = mysql.createConnection({
    host:configDB['Commu']['host'],
    user:configDB['Commu']['user'],
    password:configDB['Commu']['password'],
    database:configDB['Commu']['database']
})

// connexion à la base de données
dbCommu.connect((err) => {
    if (!err) console.log('BDD connectée.')
    else console.log('BDD connexion échouée \n Erreur: '+JSON.stringify(err))
})


module.exports = dbCommu