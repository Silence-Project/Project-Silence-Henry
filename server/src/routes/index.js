const {Router} = require('express')
const { getProductsHandler, 
        getProductsDetailHandler,
        postNewProductHandler,
      } = require('../handlers/productsHandler')

const productsRouter = Router()

productsRouter.get    ("/products/",    getProductsHandler)
productsRouter.get    ("/products/:id", getProductsDetailHandler)
productsRouter.post   ("/products/new", postNewProductHandler)

module.exports = productsRouter