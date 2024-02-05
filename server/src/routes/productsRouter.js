const {Router} = require('express')
const { getProductsHandler, 
        getProductsDetailHandler,
        postNewProductHandler,
        changeProductHandler,
        deleteProductHandler
      } = require('../handlers/productsHandler')

const productsRouter = Router()

productsRouter.get    ("/",           getProductsHandler)
productsRouter.get    ("/:id",        getProductsDetailHandler)
productsRouter.post   ("/new",        postNewProductHandler)
productsRouter.put    ("/change/:id", changeProductHandler)
productsRouter.delete ("/delete/",    deleteProductHandler)

module.exports = productsRouter