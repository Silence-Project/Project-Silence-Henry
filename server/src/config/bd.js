require('dotenv').config();
const { USER, PASSWORD, HOST, BDD } = process.env
const Usuarios = require('../models/users');

const { Sequelize } = require('sequelize');

//config
const sequelize = new Sequelize(
    `postgres://${USER}:${PASSWORD}@${HOST}/${BDD}`, { logging: false }
)

//ejecucion de funciones para creacion de modelos
Usuarios(sequelize);

module.exports = {
    conn: sequelize
}