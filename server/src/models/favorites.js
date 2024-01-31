const { DataTypes } = require('sequelize');

module.exports = (database) => {
    database.define('Favorite', {
        idFavorite: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        name: {
            defaultValue: "Favorites user" + `${this.userId}`
        }
    })
}