//const axios      = require('axios')
const {Products} = require('../config/bd')
const url=`http://localhost:3001/products`;

const getAllProducts = async()=>{
    const productsDB = await Products.findAll()
    return [...productsDB]
}

const getProductsById = async(id)=>{
    console.log("id al controller---> ", id);
    const productsDB = await Products.findAll({where: {id:id}});
    return [...productsDB];
}

const getProductsByCodigo = async(codigo)=>{
    const productsDB = await Products.findAll({where: {codigo:codigo}});
    return [...productsDB];
}

const postNewProducts = async(codigo, descripcion, talla, color, material, peso, image, precio_base, precio_venta, preferencia, estado )=>{
    const data = await Products.findAll({where: {codigo: codigo}})
    if (data.length>0) {
        throw new Error(`Ya existe un producto con el codigo: ${codigo}`);
    }
    else {
        const newProducts = await Products.create({codigo, descripcion, talla, color, material, peso, image, precio_base, precio_venta, preferencia, estado})
        return [...newProducts];
    }
}

const changeProducts = async(id, codigo, descripcion, talla, color, material, peso, image, precio_base, precio_venta, preferencia, estado )=>{
    const data = await Products.findAll({where: {id: id}})
    if (data.length===0) {
        throw new Error(`El ID del producto no existe ${id}`);
    }
    else {
        const product = await Products.update({codigo, descripcion, talla, color, material, peso, image, precio_base, precio_venta, preferencia, estado}, {where: {id:id}})
        const changeProduct = await Products.findAll({where: {id: id}})
        console.log('changeProduct-->', changeProduct);
        return [...changeProduct];
    }
}

const deleteProducts = async(id,sw)=>{
    //si estado es true se borra el registro de la tabla, si es false se desactiva el registro y no se elimina
    const data = await Products.findAll({where: {id: id}})
    if (data.length===0) {
        throw new Error(`El ID del producto no existe ${id}`);
    }
    else {
        if(sw==='true'){
            const product = await Products.destroy({where: {id:id}})
        }
        else {
            const product = await Products.update({estado: sw}, {where: {id:id}})
        }
    }
}

module.exports = {
    getAllProducts,
    getProductsById,
    getProductsByCodigo,
    postNewProducts,
    changeProducts,
    deleteProducts
}