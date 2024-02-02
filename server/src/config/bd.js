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
const favorites = require('../models/favorites.js');



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


const { Products, User, Category, Car, Order, Payments, Favorite } = sequelize.models;

//Una categoria puede tener muchos productos, pero los productos pertenecen a una sola categoría
Category.hasMany(Products, {foreignKey: 'idCategory', as: 'products'})
Products.belongsTo(Category, {foreignKey: 'idCategory', as: 'products'})

//Un usuario debe tener asignado un carro de compras 
// Y ese carro le pertenece a ese usuario
// User.hasOne(Car, {foreignKey: 'idUser', as: 'car'})
// Car.belongsTo(User, {foreignKey: 'idUser', as: 'car'})

//Un usuario debe tener asignado una lista de favoritos
// Y esa lista le pertenece a ese usuario
User.hasOne(Favorite, {foreignKey: 'userId', as: 'favorites'})
Favorite.belongsTo(User, {foreignKey: 'userId', as: 'favorites'})


// Un usuario puede tener muchas órdenes de venta
User.hasMany(Order, {foreignKey: 'userId', as: 'orders'})

//Cada orden tendrá un único método de pago de las opciones que hayan existentes
Order.hasOne(Payments, {foreignKey: 'PaymentId', as: 'payments'})


module.exports = {
    ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
    conn: sequelize
}