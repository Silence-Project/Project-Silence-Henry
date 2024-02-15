//const axios      = require('axios')
const { Products } = require('../config/bd')
// const url = `http://localhost:3001/products`;
const Sequelize = require('sequelize');

const getAllProducts = async () => {
    const productsDB = await Products.findAll()
    return [...productsDB]
}

const getProductsById = async (id) => {
    // console.log("id al controller---> ", id);
    const productsDB = await Products.findAll({ where: { id: id } });
    return [...productsDB];
}

const getProductsByCodigo = async (code) => {
    const productsDB = await Products.findAll({ where: { code: code } });
    return [...productsDB];
}

const postNewProducts = async (code,
    name,
    description,
    size,
    color,
    material,
    weight,
    image,
    cost,
    price,
    preference,
    state,
    stock,
    min,
    quantity,
    idCategory
) => {
    const data = await Products.findAll({ where: { code: code } })
    if (data.length > 0) {
        throw new Error(`Ya existe un producto con el codigo: ${code}`);
    }
    else {
        const newProducts = await Products.create(
            {
                code,
                name,
                description,
                size,
                color,
                material,
                weight,
                image,
                cost,
                price,
                preference,
                state,
                stock,
                min,
                quantity,
                idCategory
            })
        return [newProducts];
    }
}

const changeProducts = async ({id, code, name, description, size, color, material, weight, image, cost, price, preference, state, stock, quantity, idCategory}) => {
    console.log(id);
    try {
        const product = await Products.findByPk(id);
        if (!product) {
            throw new Error(`El ID del producto no existe: ${id}`);
        }

        const updatedProduct = await product.update({
            code, name, description, size, color, material, weight, image, cost, price, preference, state, stock, quantity, idCategory
        });

        return updatedProduct;
    } catch (error) {
        throw new Error(`Error al actualizar el producto: ${error.message}`);
    }
}


const deleteProducts = async (id, sw) => {
    //si sw es true se borra el registro de la tabla, si es false se desactiva el registro y no se elimina
    const data = await Products.findAll({ where: { id: id } })
    if (data.length === 0) {
        throw new Error(`El ID del producto no existe ${id}`);
    }
    else {
        if (sw === 'true') {
            const product = await Products.destroy({ where: { id: id } })
        }
        else {
            const product = await Products.update({ estado: sw }, { where: { id: id } })
        }
    }
}

const getProductsByName = async (name) => {
    const bddProducts = await Products.findAll({
        where: {
            name: {
                [Sequelize.Op.iLike]: `%${name}%`,
            }
        }
    });

    console.log(bddProducts);

    return bddProducts;
};

const changeProductStock = async ({ id, stock }) => {
    try {
      const product = await Products.findByPk(id);
      if (!product) {
        throw new Error(`El ID del producto no existe: ${id}`);
      }
  
      const updatedProduct = await product.update({
        stock: stock
      });
  
      return updatedProduct;
    } catch (error) {
      throw new Error(`Error al actualizar el stock del producto: ${error.message}`);
    }
  };

module.exports = {
    getAllProducts,
    getProductsById,
    getProductsByCodigo,
    postNewProducts,
    changeProducts,
    deleteProducts,
    getProductsByName,
    changeProductStock
}