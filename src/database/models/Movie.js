

module.exports = (sequelize, DataTypes) => {
    
    const alias = 'Pelicula'

    const cols = {
        id : {
            type: DataTypes.INTEGER,
        },
        title : {
            typ: DataTypes.STRING(500),
        },
        reting : {
            type: DataTypes.DECIMAL(3, 1),
        },
        awards : {
            type: DataTypes.INTEGER.UNSIGNED,
        },
        release_date : {
            type: DataTypes.DATE,
        },
        length: {
            type: DataTypes.INTEGER.UNSIGNED,
        },
        genre_id : {
            type: DataTypes.INTEGER,
        }
    }

    const config = {

    }

    const Movie = sequelize.define(alias, cols, config)

    return Movie
}