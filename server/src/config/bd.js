require('dotenv').config();
const { Sequelize } = require('sequelize');
const { USER, PASSWORD, HOST, BDD } = process.env
const modeloUsuario = require('../models/users.js');

//config
const sequelize = new Sequelize(
    `postgres://${USER}:${PASSWORD}@${HOST}/${BDD}`, { logging: false }
)

//ejecucion de funciones para creacion de modelos
modeloUsuario(sequelize);
console.log(sequelize.models);

module.exports = {
    conn: sequelize,
    ...sequelize.models
}