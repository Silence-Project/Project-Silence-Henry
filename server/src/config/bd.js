require('dotenv').config();
const { USER, PASSWORD, HOST, PORT, BDD } = process.env
const { Sequelize } = require('sequelize');
const modelProducts = require('../models/products');
const modeloUsuario = require('../models/users.js');
const modeloSale = require('../models/sales.js')
const modeloFavorite = require('../models/favorites.js')


const sequelize = new Sequelize(
    `postgres://${USER}:${PASSWORD}@${HOST}:${PORT}/${BDD}`, { logging: false, native: false }
)
modelProducts(sequelize);
modeloUsuario(sequelize);
modeloSale(sequelize);
modeloFavorite(sequelize)

const { Products, Usuario, Sale, Favorite } = sequelize.models;

// Un usuario puede tener muchas compras (ventas para Silence)
Usuario.hasMany(Sale, { as: 'sales', foreignKey: 'userId' })
Usuario.hasMany(Favorite, { as: 'favorites', foreignKey: 'userId' })


// Un pedido puede tener muchos productos y muchos productos pueden estar en muchos pedidos
Products.belongsToMany(Sale, { through: 'SalesProducts' });
Sale.belongsToMany(Products, { through: 'SalesProducts' });


//Un producto puede estar en muchas listas de favoritos y los favoritos pueden acceder a todos los productos
Favorite.belongsToMany(Products, { through: 'FavoriteProducts' });
Products.belongsToMany(Favorite, { through: 'FavoriteProducts' });

module.exports = {
    ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
    conn: sequelize
}