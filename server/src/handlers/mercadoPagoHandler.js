const { Router } = require("express");
require('dotenv').config();
const mercadopago = require('mercadopago');
const { ACCESS_TOKEN } = process.env;

const mercadoPagoHandler = Router();

mercadoPagoHandler.post('/', async (req, res) => {
    try {
        const product = req.body;

        mercadopago.configure({
            access_token: ACCESS_TOKEN
        });

        const arrayProducts = product.map( (e) => {
            return {
                title: e.title,
                unit_price: e.unit_price,
                currency_id: e.currency_id,
                quantity: e.quantity
            }
        })

        const preference = {
            items: arrayProducts,
            back_urls: {
                success: 'http://127.0.0.1:3000/home/confirmacion' ,
                failure: 'http://127.0.0.1:3000/home/error'
            },
            auto_return: "all"
        };

        const response = await mercadopago.preferences.create(preference);

        console.log(response);

        res.status(200).json(response.response.init_point)

    } catch(error) {
        console.error(error.message);
        res.status(500).json({ error: error.message });
    }
});


module.exports = {
    mercadoPagoHandler
};