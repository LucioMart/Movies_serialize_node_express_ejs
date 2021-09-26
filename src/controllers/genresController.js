const db = require('../database/models')

module.exports = {
    listado: (req, res) => {

        db.Genero.findAll()
        .then(generos => {
            res.send(generos)
        })
        .catch(error => console.log(error))
        
    },
    detalle: (req, res) => {

    }
}