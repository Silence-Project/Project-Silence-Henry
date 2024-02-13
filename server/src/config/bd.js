require("dotenv").config();
const { USER, PASSWORD, HOST, PORT, BDD } = process.env;
const { Sequelize } = require("sequelize");
const modelCategory = require("../models/Category.js");
const modelProducts = require("../models/products");
const modelUser = require("../models/users.js");
const modelShopingCar = require("../models/Car.js");
const modelOrder = require("../models/order.js");
const modelPayments = require("../models/Payments.js");
const modelCarProducts = require("../models/CarProducts.js");
const modelLocation = require("../models/location.js");
const modelFavorite = require("../models/favorites.js");
const modelText = require("../models/text.js");
const modelAboutUs = require("../models/AboutUs.js");

const sequelize = new Sequelize(
  `postgres://${USER}:${PASSWORD}@${HOST}:${PORT}/${BDD}`,
  {
    dialectOptions: {
     ssl: {
      require: true,
      rejectUnauthorized: false,
      },
    },
    logging: false,
    native: false,
  }
);

modelCategory(sequelize);
modelProducts(sequelize);
modelUser(sequelize);
modelShopingCar(sequelize);
modelOrder(sequelize);
modelPayments(sequelize);
modelCarProducts(sequelize);
modelLocation(sequelize);
modelFavorite(sequelize);
modelText(sequelize);
modelAboutUs(sequelize);

const {
  Products,
  User,
  Location,
  Category,
  Car,
  CartProduct,
  Order,
  Favorite,
  Text,
  AboutUs,
} = sequelize.models;

//Category has many products.
Category.hasMany(Products, { foreignKey: "idCategory", as: "products" });
Products.belongsTo(Category, { foreignKey: "idCategory", as: "products" });

// User has one car and that car belongs to one specific user
User.hasOne(Car, { foreignKey: "idUser", as: "cars" });
Car.belongsTo(User, { foreignKey: "idUser", as: "cars" });

// User has a favorite list
User.hasOne(Favorite, { foreignKey: "userId", as: "favorite_list" });
Favorite.belongsTo(User, { foreignKey: "userId", as: "favorite_list" });

// One favorite list can have many products and products can to be in many favorite list
Favorite.belongsToMany(Products, { through: "favoriteProducts" });
Products.belongsToMany(Favorite, { through: "favoriteProducts" });

// Every car can have so much products and products can to be in every car created
Car.belongsToMany(Products, { through: "CartProduct", as: "shoppingCar" });
Products.belongsToMany(Car, { through: "CartProduct", as: "shoppingCar" });

// User has many orders
User.hasMany(Order, { foreignKey: "idUserOrder", as: "ordersList" });
Order.belongsTo(User, { foreignKey: "idUserOrder", as: "ordersList" });

//1:N -> User has many Location
User.hasMany(Location, { foreignKey: "idUser", as: "locations" });
Location.belongsTo(User, { foreignKey: "idUser", as: "locations" });

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,
};
