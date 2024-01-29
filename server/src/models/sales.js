const { DataTypes } = require('sequelize');

// Este modelo corresponde a los pedidos generados por los clientes
// Figuran como venta para Silence y compra para ellos 

module.exports = (database) => {
    database.define('Sale', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        userId: {
            type: DataTypes.INTEGER
        },
        stateSale: {
            type: DataTypes.ENUM('Pending','Approved', 'Dispatched'),
            defaultValue: 'Pending'
        },
        modality: {
            type: DataTypes.ENUM('Retira', 'Entrega'),
            defaultValue: 'Retira'
        },
        conveyor: {
            type: DataTypes.ENUM('No aplica', 'Envía', 'Correo Argentino'),
            validate: {
                checkConveyor(value) {
                    if (this.modality === "Retira" && value !== "No aplica") {
                        throw new Error('Conveyor should be "No aplica" when modality is "Retira"');
                    }
                }
            }
        },
        shippingGuide: {
            type: DataTypes.INTEGER,
            validate: {
                checkGuide() {
                    if (this.modality === "Retira") {
                        throw new Error('Shipping Guide should be "No aplica" when modality is "Retira"');
                    }
                }
            }
        },
        pay: {
            type: DataTypes.ENUM('Pending, Approved, Canceled'),
        },
    })
}