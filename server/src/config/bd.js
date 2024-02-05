require('dotenv').config();
const { USER, PASSWORD, HOST, PORT, BDD } = process.env
const { Sequelize } = require('sequelize');
const modelCategory = require('../models/Category.js');
const modelProducts = require('../models/products');
const modelUser = require('../models/users.js');
const modelShopingCar = require('../models/Car.js');
const modelOrder = require('../models/order.js');
const modelPayments = require('../models/Payments.js');
const modelFavorite = require('../models/favorites.js');
const modelfavorites = require('../models/favorites.js');
const modelCarProducts = require('../models/CarProducts.js');
const modelLocation = require('../models/location.js');



const sequelize = new Sequelize(
    `postgres://${USER}:${PASSWORD}@${HOST}:${PORT}/${BDD}`, { logging: false, native: false }
)

modelCategory(sequelize);
modelProducts(sequelize);
modelUser(sequelize);
modelShopingCar(sequelize);
modelOrder(sequelize);
modelPayments(sequelize);
modelFavorite(sequelize);


const { Products, User,Location, Category, Car, Order, Payments, Favorite } = sequelize.models;

//Category has many products. 
Category.hasMany(Products, {foreignKey: 'idCategory', as: 'products'})
Products.belongsTo(Category, {foreignKey: 'idCategory', as: 'products'})


// User has one car and that car belongs to one specific user
User.hasOne(Car, {foreignKey: 'idUser', as: 'cars'})
Car.belongsTo(User, {foreignKey: 'idUser', as: 'cars'})

// Every car can have so much products and products can to be in every car created 
Car.belongsToMany(Products, {through: 'CartProduct', as: 'shoppingCar'})
Products.belongsToMany(Car, {through: 'CartProduct', as: 'shoppingCar'})

//1:N -> User has many Location
// User.hasMany(Location, {foreignKey: 'idUser', as: 'locations'});
// Location.belongsTo(User, {foreignKey: 'idUser', as: 'locations'});

module.exports = {
    ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
    conn: sequelize
}