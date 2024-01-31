const { DataTypes } = require('sequelize');


module.exports = (database) => {
    database.define('Car', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        idUser: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        
    })
}