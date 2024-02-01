const { Category, Products } = require('../config/bd');

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
        const categories = await Category.findAll(({
            include: [{
              model: Products,
              as: 'products',
              attributes: ['id','descripcion']
            }],
          }));
        
        const categoriesMap = categories.map((category) => {
            return {
                id: category.id,
                name: category.name,
                isActive: category.isActive,
                products: category.products.map((product) => {
                    return {
                        id: product.id,
                        descripcion: product.descripcion
                    }
                })
            }
        })

        return categoriesMap
    } catch (error) {
        return error.message
    }
}



// Delete category if this don't have movemenents, if it have it, put unavailable



// Update category

const updateCategory = async (categoryId, name) => {
    try {
        const existingCategory= await Category.findByPk(categoryId);

        if(!existingCategory) {
            throw new Error ('Category doesnt exist')
        }

        const newNameCategory= await existingCategory.update({name})
        return newNameCategory
    } catch(error) {
        return error.message
    }
}

module.exports = {
    createCategory,
    viewCategories,
    updateCategory
}