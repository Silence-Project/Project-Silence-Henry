const { DataTypes } = require('sequelize');

// Este modelo corresponde a los pedidos generados por los clientes
// Figuran como venta para Silence y compra para ellos 

module.exports = (database) => {
    database.define('Payments', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
}