//const axios      = require('axios')
const {Products} = require('../config/bd')
const url=`http://localhost:3001/products`;

const getAllProducts = async()=>{
    const productsDB = await Products.findAll()
    return [...productsDB]
}

const getProductsById = async(id)=>{
    const productsDB = await Products.findByPk(id);
    return [...productsDB];
}

const getProductsByCodigo = async(codigo)=>{
    const productsDB = await Products.findAll({where: {codigo:codigo}});
    return [...productsDB];
}

const postNewProducts = async(codigo, descripcion, talla, color, material, peso, image, precio_base, precio_venta, preferencia, estado )=>{
    console.log('codigo--->', codigo);
    console.log('estado--->', estado)
    const data = await Products.findAll({where: {codigo: codigo}})
    if (data.length>0) {
        throw new Error(`Ya existe un producto con el codigo: ${codigo}`);
    }
    const newProducts = await Products.create({codigo, descripcion, talla, color, material, peso, image, precio_base, precio_venta, preferencia, estado})
    
    return [...newProducts];
}

module.exports = {
    getAllProducts,
    getProductsById,
    getProductsByCodigo,
    postNewProducts,
}