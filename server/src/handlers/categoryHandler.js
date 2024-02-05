const { Router } = require("express");
const { createCategory, viewCategories, updateCategory } = require('../controllers/categoryController');

const categoryHandler = Router();

// POST 
categoryHandler.post('/new', async (req, res) => {
    const { name } = req.body

    try {
        if (!name)
            throw new Error('Data required');

            const newCategory = await createCategory(name);

        res.status(201).json(newCategory)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

// GET
categoryHandler.get('/allCategory', async(req, res) => {
    try {
        await viewCategories()
        .then(category => res.status(200).json(category))
    } catch(error) {
        res.status(400).json({error:error.message})
    }
})

// UPDATE 
categoryHandler.put('/category/:id', async(req, res) => {
    const {id} = req.params
    const {name} = req.body
    try{
        const updatingCategory = await updateCategory(id, name)
        res.status(200).json(updatingCategory)
    } catch(error) {
        res.status(400).json({error: error.message})
    }
})

module.exports = {
    categoryHandler
}