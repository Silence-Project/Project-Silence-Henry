const { 
    getAllProducts, 
    getProductsById,
    getProductsByCodigo,
    postNewProducts,
    changeProducts,
    deleteProducts
  } = require('../controllers/productsController');

const getProductsHandler = async (req,res)=>{
    const {codigo} = req.query
    console.log('codigo--->', codigo)
    try {
        if(codigo){
            const getProductByCodigo = await getProductsByCodigo(codigo)
            res.status(200).json(getProductByCodigo)
        }
        else{
            const response = await getAllProducts()
            res.status(200).json(response)
        }
    }
    catch(error){
        res.status(400).send(`No se pudo recuperar información del producto ${codigo}`);
    }
}
const getProductsDetailHandler = async(req,res)=>{
    const {id} = req.params
    console.log("id--->", id);
    try {
        const response = await getProductsById(id)
        res.status(200).json(response)
    }
    catch(error){
        res.status(400).send(`No se pudo recuperar información del producto con id--> ${id}`);
    }
}

const postNewProductHandler = async(req,res)=>{
    const {codigo, descripcion, talla, color, material, peso, image, precio_base, precio_venta, preferencia, estado, stock, minimo, idCategory} = req.body;
    try{
        const newProduct = await postNewProducts(codigo, descripcion, talla, color, material, peso, image, precio_base, precio_venta, preferencia, estado, stock, minimo, idCategory)
        res.status(200).json(newProduct)
    }catch(error){
        console.log(error);
        res.status(400).send(`No se pudo crear el registro del producto ${codigo} ${descripcion}`)
    }
}

const changeProductHandler = async(req,res)=>{
    const {id, codigo, descripcion, talla, color, material, peso, image, precio_base, precio_venta, preferencia, estado, stock, minimo} = req.body;
    try{
        const product = await changeProducts(id, codigo, descripcion, talla, color, material, peso, image, precio_base, precio_venta, preferencia, estado, stock, minimo)
        console.log('product---> ', product);
        res.status(200).json(product)
    }catch(error){
        console.log(error);
        res.status(400).send(`No se pudo actualizar el producto ${codigo} ${descripcion}`)
    }
}

const deleteProductHandler = async(req,res)=>{
    //si sw es true se borra el registro de la tabla, si es false se desactiva el registro y no se elimina
    const {id, sw} = req.query
    try {
        const response = await deleteProducts(id, sw)
        res.status(200).json(response)
    }
    catch(error){
        res.status(400).send(`No se pudo borrar la información del producto con id--> ${id}`);
    }
}

module.exports = {
    getProductsHandler, 
    getProductsDetailHandler,
    postNewProductHandler,
    changeProductHandler, 
    deleteProductHandler
}