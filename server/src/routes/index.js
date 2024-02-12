const { Router } = require("express");
const productsRouter = require('./productsRouter');
const usersRouter = require('./usersRouter');
const categoryRouter = require('./categoryRouter');
const carRouter = require('./carRouter');
const orderRouter = require('./orderRouter');
const mercadoPagoRouter = require('./mercadoPagoRouter');
const locationRouter = require('./locationRouter');
const favoriteRouter = require('./favoriteRouter');
const topTextRouter = require('./topTextRouter');

const router = Router();

router.use('/products', productsRouter);
router.use('/usuarios', usersRouter);
router.use('/locations', locationRouter);
router.use('/categories', categoryRouter);
router.use('/car', carRouter);
router.use('/orders', orderRouter);
router.use('/payment', mercadoPagoRouter);
router.use('/favorite', favoriteRouter)
router.use('/toptext', topTextRouter)

module.exports = router;