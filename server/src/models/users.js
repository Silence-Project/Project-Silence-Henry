const { DataTypes } = require('sequelize');

const Usuario = (sequelize) => {
  //definir modelo
  sequelize.define('Usuario', {
    // id: {
    //   type: DataTypes.INTEGER,
    //   primaryKey: true,
    //   allowNull: false,
    //   autoIncrement: true
    // },
    cedulaId: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        min: 5,
        max: 20
      }
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    phoneNumber: {
      type: DataTypes.INTEGER
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        is: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{3,30}$/,
        notEmpty: true,
        min: 3,
        max: 30
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
        notNull: false
      },
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false,
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,

    },
    city: {
      type: DataTypes.STRING
    },
    country: {
      type: DataTypes.STRING,
      defaultValue: "Argentina"
    },
    postalCode: {
      type: DataTypes.STRING,
    }
  });
}

module.exports = Usuario;