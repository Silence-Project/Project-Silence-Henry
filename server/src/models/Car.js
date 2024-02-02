const { DataTypes } = require('sequelize');


module.exports = (database) => {
    database.define('Car', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        totalPrice: {
            type: DataTypes.INTEGER,
            defaultValue: "0"
        }
    })
}