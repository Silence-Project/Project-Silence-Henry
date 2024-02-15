const { DataTypes } = require('sequelize');

module.exports = (database) => {
    database.define('Votes', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        idUser:{ 
            type: DataTypes.INTEGER,
            allowNull: false
        },
        idProduct: {
            type: DataTypes.STRING,
            allowNull: false
        },
        vote: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        comment: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
}