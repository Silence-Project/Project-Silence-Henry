const { Router } = require("express");
const { mercadoPagoHandler } = require('../handlers/mercadoPagoHandler')

const router = Router();

router.use("/", mercadoPagoHandler);


module.exports = router