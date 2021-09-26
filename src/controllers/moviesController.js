const db = require('../database/models')
const Op = db.Sequelize.Op

module.exports = {
    listado: (req, res) => {

        db.Pelicula.findAll()
        .then(peliculas => {
            return res.render('moviesList',{
                peliculas
            })
        })
        .catch(error => console.log(error))

    },
    nueva: (req, res) => {

    },
    recomendado: (req, res) => {
        db.Pelicula.findAll({
            where: {
                awards: {[Op.gte]: 3}
            }
        })
        .then(peliculas => {
            return res.render('recommendedMovies', {
                peliculas
            })
        })
    },
    detalle: (req, res) => {
        db.Pelicula.findByPk(req.params.id)
                    .then(pelicula => {
                        return res.render('moviesDetail', {
                            pelicula
                        })
                    })
                    .catch(error => console.log(error))
    }
}