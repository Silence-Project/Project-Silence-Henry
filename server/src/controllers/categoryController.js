const { Category } = require('../config/bd');

// Create Category
// Tiene relación uno a muchos con productos
const createCategory = async (name) => {
    try{
        const newCategory = await Category.create({
            name,
            isActive: true,
        })

        return newCategory
    } catch (error){
        return error.message
    }
}


// Get categories and view all products

const viewCategories = async () => {
    try{
        const categories = await Category.findAll();
        
        const categoriesMap = categories.map((category) => {
            return {
                id: category.id,
                name: category.name,
                isActive: category.isActive
            }
        })

        return categoriesMap
    } catch (error) {
        return error.message
    }
}



// Delete category if this don't have movemenents, if it have it, put unavailable



// Update category

module.exports = {
    createCategory,
    viewCategories
}