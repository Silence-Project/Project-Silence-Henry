const {Router} = require('express')
const { getProductsHandler, 
        getProductsDetailHandler,
        postNewProductHandler,
      } = require('../handlers/productsHandler')

const productsRouter = Router()

productsRouter.get    ("/",    getProductsHandler)
productsRouter.get    ("/:id", getProductsDetailHandler)
productsRouter.post   ("/new", postNewProductHandler)

module.exports = productsRouter