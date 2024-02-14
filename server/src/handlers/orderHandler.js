const { Router } = require("express");
const { createOrder, getOrders, getOrderListByUser } = require('../controllers/orderController');

const orderHandler = Router();

orderHandler.post('/new', async (req, res) => {
    const { statePayment, shippingMethod, idUserOrder } = req.body

    try {
        const newOrder = await createOrder(statePayment, shippingMethod, idUserOrder)

        res.status(201).json(newOrder)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

orderHandler.get('/', async (req, res) => {
    try {
        const orders = await getOrders();
        res.status(202).json(orders)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

orderHandler.get('/:idUserOrder', async (req, res) => {
    const { idUserOrder } = req.params

    try {
        const ordersByUser = await getOrderListByUser(idUserOrder);
        res.status(202).json(ordersByUser)
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
})

module.exports = {
    orderHandler
}