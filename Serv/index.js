// inclure les dépendances et middlewares 
const express = require('express') 
const ejs = require('ejs')
const mysql = require('mysql')
const iniparser = require('iniparser')
const Routeur = require('./routes/sauvetageRoute')

// Port
const port = process.env.PORT || 3000;

// activation des dépendances
const app = express();
app.set('view engine', 'ejs');
app.use(express.static('views'))
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// Ecoute du Port //
app.listen(port, () => {
    console.log('Ecoute du port ' + port);
});

/*app.use('/',(req, res) =>{
    res.send("Server Lancé !")
})*/

app.use('/Sauvetage', Routeur)

// erreur 404 //
app.use((req, res) => {
    res.status(404).render('erreur')
});