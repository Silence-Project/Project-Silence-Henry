const { Router } = require("express");
const { createCar, getCarsWithProducts } = require('../controllers/carController');

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

// GET 
carHandler.get("/cars", async (req, res) => {
    try {
        const cars = await getCarsWithProducts();

        res.status(200).json(cars)
    }catch(error) {
        res.status(400).json({error: error.message})
    }
})

module.exports = {
    carHandler
};
