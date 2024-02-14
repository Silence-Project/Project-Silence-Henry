const { Order } = require('../config/bd');

const createOrder = async (statePayment, shippingMethod, idUserOrder) => {
    try {
        const newOrder = await Order.create({
            statePayment,
            shippingMethod,
            idUserOrder
        })

        return newOrder
    }catch(error) {
        return error.message
    }

}

const getOrders = async () => {
    try {
        const orders = await Order.findAll();
        return orders
    } catch (error) {
        return error.message      
    }
}

const getOrderListByUser = async (idUserOrder) => {
    try {
        const ordersByUser = await Order.findAll({where: {
            idUserOrder: idUserOrder
        }})

        return ordersByUser
    } catch (error) {
        return error.message      
    }
}

module.exports = {
    createOrder,
    getOrders,
    getOrderListByUser
}