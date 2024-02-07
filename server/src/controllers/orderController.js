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

module.exports = {
    createOrder
}