const { DataTypes } = require('sequelize');

module.exports = (database) => {
    database.define('Favorite', {
        idFavorite: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING
        }
    })
}