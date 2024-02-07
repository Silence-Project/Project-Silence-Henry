const { Router } = require("express");
const { createOrder } = require('../controllers/orderController');

const orderHandler = Router();

orderHandler.post('/new', async(req, res) => {
    const {statePayment, shippingMethod, idUserOrder} = req.body

    try {
        const newOrder = await createOrder(statePayment, shippingMethod, idUserOrder)

        res.status(201).json(newOrder)
    }catch(error) {
        res.status(400).json({error: error.message})
    }
})

module.exports = {
    orderHandler
}