require('dotenv').config();
const { USER, PASSWORD, HOST, PORT, BDD } = process.env
const { Sequelize } = require('sequelize');
const modelProducts = require('../models/products');
const modeloUsuario = require('../models/users.js');
const sequelize = new Sequelize(
    `postgres://${USER}:${PASSWORD}@${HOST}:${PORT}/${BDD}`, { logging: false, native: false }
)
modelProducts(sequelize);
modeloUsuario(sequelize);

const { Products, Usuario } = sequelize.models;

module.exports = {
    ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
   conn: sequelize
}