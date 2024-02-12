const { Router } = require("express");
const { createTopText, updateTopText, getText} = require('../controllers/textController');

const topTextHandler = Router();

topTextHandler.post('/new', async (req, res) => {
    const { description } = req.body;
    try {
        const newText = await createTopText({ description });
        res.status(201).json(newText)
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
})

topTextHandler.put('/:idTopText', async (req, res) => {
    const { idTopText } = req.params; 
    const { description } = req.body;
    try {
        const updatingText = await updateTopText(idTopText, description); 
        res.status(200).json(updatingText); 
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

topTextHandler.get('/texts', async (req, res) =>{
    try {
        const text = await getText()
        res.status(200).json(text)
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
})


module.exports = {
    topTextHandler
}