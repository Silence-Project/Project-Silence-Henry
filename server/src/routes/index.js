const { Router }    = require("express");
const productsRouter = require('./productsRouter');
const usersRouter  = require('./usersRouter');

const router = Router();

router.use('/products',productsRouter);
router.use('/usuarios',usersRouter);

module.exports = router;