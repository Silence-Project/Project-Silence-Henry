const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  sequelize.define('Products', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    codigo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    talla: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    color: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    material: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    peso: {
      type: DataTypes.FLOAT,
      allowNull: false,
  },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    precio_base: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    precio_venta: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    preferencia: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    estado: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
      },
  }, { timestamps : false});
};