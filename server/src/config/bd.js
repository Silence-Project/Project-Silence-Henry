require('dotenv').config();
const { USER, PASSWORD, HOST, PORT, BDD } = process.env

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    `postgres://${USER}:${PASSWORD}@${HOST}:${PORT}/${BDD}`, { logging: false }
)

module.exports = {
    conn: sequelize
}