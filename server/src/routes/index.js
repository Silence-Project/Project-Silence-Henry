const { Router }     = require("express");
const productsRouter = require('./productsRouter');
const usersRouter    = require('./usersRouter');
const categoryRouter = require('./categoryRouter');

const router = Router();

router.use('/products',productsRouter);
router.use('/usuarios',usersRouter);
router.use('/categories', categoryRouter)

module.exports = router;