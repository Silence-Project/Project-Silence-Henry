const { DataTypes } = require('sequelize');

module.exports = (database) => {
    database.define('Favorite', {
        userId: {
            type: DataTypes.INTEGER
        },
    })
}