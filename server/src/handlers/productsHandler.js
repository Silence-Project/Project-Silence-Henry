const { 
    getAllProducts, 
    getProductsById,
    getProductsByCodigo,
    postNewProducts,
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
try {
    const response = await getProductsById(id)
    res.status(200).json(response)
}
catch(error){
    res.status(400).send(`No se pudo recuperar información del producto.`);
}
}

const postNewProductHandler = async(req,res)=>{
const {codigo, descripcion, talla, color, material, image, precio_base, precio_venta, preferencia, estado} = req.body;
try{
    const newProduct = await postNewProducts(codigo, descripcion, talla, color, material, image, precio_base, precio_venta, preferencia, estado)
    res.status(200).json(newProduct)
}catch(error){
    console.log(error);
    res.status(400).send(`No se pudo crear el registro del producto ${codigo} ${descripcion}`)
}
}

module.exports = {
    getProductsHandler, 
    getProductsDetailHandler,
    postNewProductHandler, 
}