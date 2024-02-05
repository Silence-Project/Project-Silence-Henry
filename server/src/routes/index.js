const { Router }     = require("express");
const productsRouter = require('./productsRouter');
const usersRouter    = require('./usersRouter');
const categoryRouter = require('./categoryRouter');
const carRouter = require('./carRouter');

const router = Router();

router.use('/products',productsRouter);
router.use('/usuarios',usersRouter);
router.use('/categories', categoryRouter);
router.use('/car', carRouter);

module.exports = router;