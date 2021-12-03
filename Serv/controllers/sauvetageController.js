const db = require("../models/requetes")
const Store = require("store")

const accueil = (req, res) => {
    res.render('accueil')
}

const sauveteurs = async (req, res) => {
    let modif = true
    let sauvetages = await db.getAllSauvetage()
    console.log(sauvetages)
    if (Store.get("connecte") == false){modif = false}
    res.render('sauveteurs', {modif : modif, sauvetages : sauvetages})
}

const connexion = (req, res) => {
    res.render('connexion')
}

const verifConnect = async (req, res) => {
    let modif = false;
    let ident = req.body.ident;
    let vraiMdp = await db.getCompte(ident);
    console.log(vraiMdp)
    if (vraiMdp == ""){
        Store.set("connecte", false)
        res.render("erreurIdent")
    }else{
        let mdp = req.body.mdp;
        console.log(mdp)
        if (mdp == vraiMdp[0].mdp){
            modif = true;
            Store.set("connecte", true)
        }else{
            res.render("erreurMdp")
            Store.set("connecte", false)
        }
    }
    console.log(Store.get("connecte"))
    res.redirect("/Sauvetage")
}

const modif = async (req, res) => {
    let idSauve = req.body.id;
    let modifi = req.body.text;
    console.log(idSauve, modifi)
    await db.insertCommu(idSauve, modifi)
    res.render("Confirm")
}

const admin = async (req, res) => {
    let commu = await db.getAllCommu()
    res.render("admin", {commu : commu})
}


// Exportation //
module.exports = {
    accueil,
    sauveteurs,
    connexion,
    verifConnect,
    modif,
    admin
}