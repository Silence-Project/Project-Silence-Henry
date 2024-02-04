const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Location", {
    country: {
      type: DataTypes.STRING,
      defaultValue: "argentina",
    },
    city: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
    address: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
    postalCode: {
      type: DataTypes.STRING,
      defaultValue: "",
    }
  })
}