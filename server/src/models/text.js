const { DataTypes } = require('sequelize');

module.exports = (database) => {
    database.define('Text', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        description: {
            type: DataTypes.STRING
        }
    })
}