const dbUser = require('../models/bddUser')
const dbCommu = require('../models/bddCommu')
const dbSauvetage = require('../models/bddSauvetage')

// SELECT //
const getCompte = async (ident) => {
    return new Promise((resolve, reject) => {
        let sql = "SELECT mdp FROM utilisateur where identifiant = ?";
        dbUser.query(sql, ident, (err, data, fields) => {
            if (err) throw err;
            return resolve(data)
        })
    })
}

const insertCommu = async (idSauve, modif) => {
    return new Promise((resolve, reject) => {
        let sql='INSERT INTO patient (Id_Sauvetage, modif) VALUES (?, ?)';
        dbCommu.query(sql, [idSauve, modif],(err, data, fields) => {
            if (err) throw err;
            return resolve(data);
        })
    })
}

const getAllCommu = async () => {
    return new Promise((resolve, reject) => {
        let sql = "SELECT * FROM ticket";
        dbCommu.query(sql, (err, data, fields) => {
            if (err) throw err;
            return resolve(data)
        })
    })
}

const getSauvetage = async (id) => {
    return new Promise((resolve, reject) => {
        let sql = "SELECT Article FROM sauvetage WHERE idSauvetage = ?";
        dbSauvetage.query(sql, id, (err, data, fields) => {
            if (err) throw err;
            return resolve(data)
        })
    })
}

const getAllSauvetage = async () => {
    return new Promise((resolve, reject) => {
        let sql = "SELECT * FROM sauvetage";
        dbSauvetage.query(sql, (err, data, fields) => {
            if (err) throw err;
            return resolve(data)
        })
    })
}



module.exports={
    getCompte,
    insertCommu,
    getAllCommu,
    getSauvetage,
    getAllSauvetage,
}