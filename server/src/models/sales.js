const { DataTypes } = require('sequelize');

module.exports = (database) => {
    database.define('Sale', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        state: {
            type: DataTypes.ENUM('Approved', 'Dispatched'),
            defaultValues: 'pending'
        },
        modality: {
            type: DataTypes.ENUM('Retira', 'Entrega')
        },
        conveyor: {
            validate: (modality) => {
                if (modality === 'Retira') {
                    return 'No aplica'
                } else {
                    type: DataTypes.ENUM('Envía', 'Envío Argentina')
                }
            }
        },
        shippingGuide: {

        },
        pay: {

        },
    })
}