const { DataTypes } = require('sequelize');

// Este modelo corresponde a los pedidos generados por los clientes
// Figuran como venta para Silence y compra para ellos 

module.exports = (database) => {
    database.define('Order', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        PaymentId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        totalOrder: {
            type: DataTypes.FLOAT,
            allowNull: false,
        }
    })
}