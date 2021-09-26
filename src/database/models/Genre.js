const { DataTypes } = require("sequelize/types")
const { underscoredIf } = require("sequelize/types/lib/utils")

module.exports = (sequelize, dataTipes) => {

    const alias = 'Genero'

    const cols = {

        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true   
        },
        name: {
            type: DataTypes.STRING(100),
            ALLOWNULL : false
        },
        ranking: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            unique: true
        },
        active: {
            type: DataTypes.BOOLEAN,
            defaultValue: 1,
            allowNull: false
        }

    }

    const config = { 
        underscored: true
    }

    const Genre = this.sequelize.define(alias, cols, config)

    return Genre

}