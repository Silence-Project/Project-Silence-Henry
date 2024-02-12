const { Router } = require("express");
const { createFavoriteList, getFavoritesByUser, addProductsToFavoriteListByUser } = require('../controllers/favoriteController');

const favoriteHandler = Router();

// POST FAVORITE LIST
favoriteHandler.post('/new', async (req, res) => {

    const {userId} = req.body

    try {
        if (!userId)
        throw new Error ('Data required');

        const newFavoriteList = await createFavoriteList(userId);

        res.status(201).json(newFavoriteList);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

// GET FAVORITE PRODUCTS OF ONE LIST BY USER
favoriteHandler.get('/:id', async (req, res) => {
    const {id} = req.params;

    try {
        if (!id)
        throw new Error ('Data required');

        const favoriteProductsByUser = await getFavoritesByUser(id);
        
        res.status(200).json(favoriteProductsByUser)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

favoriteHandler.put('/addProducts/:id', async (req, res) => {
    const { id } = req.params;
    const { products } = req.body;
    try {
        if (!id || !products)
            throw new Error('Se requiere la información');

        const addProductsToFavorite = await addProductsToFavoriteListByUser(id, products);
        
        res.status(200).json(addProductsToFavorite);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});


module.exports = {
    favoriteHandler
}