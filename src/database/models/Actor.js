const { DataTypes } = require("sequelize/types");
const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {

    const alias = "Actor"

    const cols = {
        id: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        first_name: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        rating: {
            type: DataTypes.DECIMAL(3,1).UNSIGNED,
            defaultValue: null
        },
        favorite_movie_id: {
            type: DataTypes.INTEGER(10),
            defaultValue: null
        },
        country: {
            type: DataTypes.STRING(255),
            defaultValue: null
        }
    }

    const config = {
        tableName: 'actors',
        timestamps: true,
        underscored: true 
    }

    const Actor = sequelize.define(alias, cols, config)

    

}