const { Router } = require("express");
const { createDataAboutUs, updateInformation, getInformation} = require('../controllers/aboutUsController');

const aboutUsRouter = Router();

aboutUsRouter.post('/new', async (req, res) => {
    const { aboutUs, mision, vision, history } = req.body;
    try {
        const newInformation = await createDataAboutUs({ aboutUs, mision, vision, history });
        res.status(201).json(newInformation)
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
})

aboutUsRouter.put('/update', async (req, res) => {
    const { aboutUs, mision, vision, history } = req.body;
    try {
        const updatingTextInfo = await updateInformation(aboutUs, mision, vision, history); 
        res.status(200).json(updatingTextInfo);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

aboutUsRouter.get('/information', async (req, res) =>{
    try {
        const textIno = await getInformation()
        res.status(200).json(textIno)
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
})


module.exports = {
    aboutUsRouter
}