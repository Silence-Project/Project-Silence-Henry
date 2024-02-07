const { Router } = require("express");
const productsRouter = require('./productsRouter');
const usersRouter = require('./usersRouter');
const categoryRouter = require('./categoryRouter');
const carRouter = require('./carRouter');
const orderRouter = require('./orderRouter');
const mercadoPagoRouter = require('./mercadoPagoRouter');

const router = Router();

router.use('/products', productsRouter);
router.use('/usuarios', usersRouter);
router.use('/categories', categoryRouter);
router.use('/car', carRouter);
router.use('/orders', orderRouter);
router.use('/payment', mercadoPagoRouter);

module.exports = router;