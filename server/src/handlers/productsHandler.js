const {
    getAllProducts,
    getProductsById,
    getProductsByCodigo,
    postNewProducts,
    changeProducts,
    deleteProducts,
    getProductsByName,
    changeProductStock
} = require('../controllers/productsController');

const getProductsHandler = async (req, res) => {
    const { code } = req.query
    // console.log('codigo--->', code)
    try {
        if (code) {
            const getProductByCodigo = await getProductsByCodigo(code)
            res.status(200).json(getProductByCodigo)
        }
        else {
            const response = await getAllProducts()
            res.status(200).json(response)
        }
    }
    catch (error) {
        res.status(400).send(`No se pudo recuperar información del producto ${codigo}`);
    }
}
const getProductsDetailHandler = async (req, res) => {
    const { id } = req.params
    // console.log("id--->", id);
    try {
        const response = await getProductsById(id)
        res.status(200).json(response)
    }
    catch (error) {
        res.status(400).send(`No se pudo recuperar información del producto con id--> ${id}`);
    }
}

const postNewProductHandler = async (req, res) => {
    const { code, name, description, size, color, material, weight, image, cost, price, preference, state, stock, min, idCategory } = req.body;
    try {
        const newProduct = await postNewProducts(code, name, description, size, color, material, weight, image, cost, price, preference, state, stock, min, quantity = 1, idCategory)
        res.status(200).json(newProduct)
    } catch (error) {
        // console.log(error);
        res.status(400).send(`No se pudo crear el registro del producto ${code} ${description}`)
    }
}

const changeProductHandler = async (req, res) => {
    const { id } = req.params; 

    const { code, name, description, size, color, material, weight, image, cost, price, preference, state, stock, quantity, idCategory } = req.body;
    try {
        const productUpdate = await changeProducts({ id, code, name, description, size, color, material, weight, image, cost, price, preference, state, stock, quantity, idCategory });
        res.status(200).json(productUpdate);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


const deleteProductHandler = async (req, res) => {
    //si sw es true se borra el registro de la tabla, si es false se desactiva el registro y no se elimina
    const { id, sw } = req.query
    try {
        const response = await deleteProducts(id, sw)
        res.status(200).json(response)
    }
    catch (error) {
        res.status(400).send(`No se pudo borrar la información del producto con id--> ${id}`);
    }
}

const getProductsByNameHandler = async (req, res) => {
    try {
        const { name } = req.query;
        const productsByName = await getProductsByName(name);

        res.status(200).json(productsByName);
    } catch (error) {
        res.status(404).json({ error: error.message });
        console.error(error);
    }
};

const changeProductStockPatchHandler = async (req, res) => {
    const { id } = req.params;
  
    const { stock } = req.body;
  
    try {
      const productUpdate = await changeProductStock({ id, stock });
      res.status(200).json(productUpdate);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };


module.exports = {
    getProductsHandler,
    getProductsDetailHandler,
    postNewProductHandler,
    changeProductHandler,
    deleteProductHandler,
    getProductsByNameHandler,
    changeProductHandler,
    changeProductStockPatchHandler
}