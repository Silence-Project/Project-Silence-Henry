const { Router } = require("express");
require('dotenv').config();
const mercadopago = require('mercadopago');
const { ACCESS_TOKEN } = process.env;

const mercadoPagoHandler = Router();

mercadoPagoHandler.post('/', async (req, res) => {
    try {
        const { title, unit_price, currency_id, quantity } = req.body;

        mercadopago.configure({
            access_token: ACCESS_TOKEN
        });

        const preference = {
            items: [
                {
                    title: title,
                    unit_price: unit_price,
                    currency_id: currency_id,
                    quantity: quantity
                }
            ],
            back_urls: {
                success: 'http://127.0.0.1:3000/home' ,
                failure: 'http://127.0.0.1:3000/home' 
            },
            auto_return: "approved"
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