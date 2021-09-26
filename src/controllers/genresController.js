const db = require('../database/models')

module.exports = {
    listado: (req, res) => {

        db.Genero.findAll()
        .then(generos => {
            return res.render('genresList', {
                generos
            })
        })
        .catch(error => console.log(error))

    },
    detalle: (req, res) => {
        db.Genero.findByPk(req.params.id)
        .then(genero => {
            return res.render('genresDetail',{
                genero
            })
        })
    }
}