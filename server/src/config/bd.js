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



const { Products, User, Category, Car, Order, Payments } = sequelize.models;



module.exports = {
    ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
    conn: sequelize
}