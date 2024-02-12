const { DataTypes } = require('sequelize');

module.exports = (database) => {
    database.define('AboutUs', {
        aboutUs: {
            type: DataTypes.STRING(1000)
        }, 
        mision: {
            type: DataTypes.STRING(1000)
        },
        vision: {
            type: DataTypes.STRING(1000)
        },
        history: {
            type: DataTypes.STRING(1000)
        }
    })
}