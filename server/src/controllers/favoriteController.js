const { Favorite, Products } = require('../config/bd');

// CREATE A FAVORITE LIST 
const createFavoriteList = async (userId) => {
    try {

        const validateFavoriteList = await Favorite.findOne({
            where: {
                userId: userId
            }
        })

        console.log(validateFavoriteList);

        if (!validateFavoriteList) {
            const newFavoriteList = await Favorite.create({ name: `favoriteListUser ${userId}`, userId })

            return newFavoriteList
        } else {
            throw new Error(`Ya hay una lista de favoritos para el usuario ${userId}`)
        }

    } catch (error) {
        return error.message
    }
}

// GET FAVORITE LIST BY USER
const getFavoritesByUser = async (userId) => {
    try {
        const favoriteList = await Favorite.findByPk(userId, {
            include: [{
                model: Products,
                attributes: ['name']
            }]
        })

        const favorites = favoriteList.map((product) => {
            return {
                name: product.name
            }
        })

        return favorites
    } catch (error) {
        error.message
    }
}

// GET FAVORITE LIST GENERAL (ALL USERS)

// ADD PRODUCTS AT FAVORITE LIST BY USER 
const addProductsToFavoriteListByUser = async (userId, products) => {
    try {
        // Buscar la lista de productos favoritos del usuario
        const favoriteListProducts = await Favorite.findByPk(userId);

        // Verificar si existe la lista de productos favoritos
        if (!favoriteListProducts) {
            throw new Error(`No hay una lista de productos favoritos para el usuario ${userId}`);
        } else {
            // Actualizar la lista de productos favoritos del usuario
            await favoriteListProducts.addProducts(products);
            return favoriteListProducts;
        }
    } catch (error) {
        throw new Error(error.message);
    }
};


// REMOVE PRODUCTS AT FAVORITE LIST BY USER 

module.exports = {
    createFavoriteList,
    getFavoritesByUser,
    addProductsToFavoriteListByUser
}