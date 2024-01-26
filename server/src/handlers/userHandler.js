const { Router } = require("express");
const { Usuario } = require("../config/bd");
const { createUser } = require('../controllers/createUserController');

const userHandler = Router();

//POST
userHandler.post("/", async (req, res) => {
  const { name, email, password } = req.body;
  // console.log('lo que recibi por BODY: ', req.body);

  try {
    const nuevoUsuario = await createUser(name, email, password);

    res.status(201).json(nuevoUsuario);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

//GET all
userHandler.get("/", async (req, res) => {
  try {
    const usuarios = await Usuario.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      }});

    res.status(200).json(usuarios);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = {
  userHandler,
};
