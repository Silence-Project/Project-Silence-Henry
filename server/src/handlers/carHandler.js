const { Router } = require("express");
const { createCar, getCarsWithProducts, getDetailCarWithProducts, editQuantityProductByCar, addProductToCart, removeProductFromCart } = require('../controllers/carController');

const carHandler = Router();

// POST 
carHandler.post("/new", async(req, res) => {
    const { idUser, products } = req.body;

    try {
        if (!idUser)
            throw new Error('Data required');

        const newCar = await createCar(idUser, products);

        res.status(201).json(newCar);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// GET CARS GENERAL
carHandler.get("/cars", async (req, res) => {
    try {
        const cars = await getCarsWithProducts();

        res.status(200).json(cars)
    }catch(error) {
        res.status(400).json({error: error.message})
    }
})

// GET CARS BY USER
carHandler.get("/car/:idUser", async (req, res) => {
    try {
        const {idUser} = req.params;
        const carByUser = await getDetailCarWithProducts(idUser);
        res.status(200).json(carByUser)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

// UPDATE QUANTITY  
carHandler.put("/car/:idCar", async (req, res) => {
    const {idCar} = req.params;
    const {productId, quantity} = req.body
    try {
        const updatingQuantity = await editQuantityProductByCar(idCar, productId, quantity)

        res.status(200).json(updatingQuantity)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

carHandler.put('/newProduct', async (req, res) => {
    const {carId, productId, quantity} = req.body 
    try {
        newProductInCar = await  addProductToCart (carId, productId, quantity);

        res.status(200).json(newProductInCar)
        
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

carHandler.delete('/remove/:idCar/:productId', async (req, res) => {
    const {idCar, productId} = req.params
    try {
        productDeleteFromCar = await removeProductFromCart(idCar, productId);
        res.status(200).json(productDeleteFromCar)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})


module.exports = {
    carHandler
};
