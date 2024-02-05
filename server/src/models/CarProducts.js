const { DataTypes } = require('sequelize');

module.exports = (database) => {
    database.define('CartProduct', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
          },
          quantity: {
            type: DataTypes.INTEGER
          },
          totalPrice: {
            type: DataTypes.INTEGER
          }
    })
}