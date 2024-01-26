const { Router } = require("express");
const { Usuario } = require("../config/bd");
const { createUser } = require("../controllers/createUserController");
const { getUserByEmail } = require("../controllers/getUserController");

const userHandler = Router();

//POST
userHandler.post("/", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const nuevoUsuario = await createUser(name, email, password);

    res.status(201).json(nuevoUsuario);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


//GET by param email
/**
 * Necesidad de verificar/validar que no exista una cuenta ya 
 * con el correo proporcionado a través del formulario de 'Crear cuenta'
 * Retorna {
 *  idUser ? Int 
 *  email exists ? boolean
 *  isActive ? boolean
 * }
*/
userHandler.get("/", async (req, res) => {
  const { email } = req.query;

  try {
    let userByEmail = await getUserByEmail(email);
    res.status(200).json(userByEmail);
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
      },
    });

    res.status(200).json(usuarios);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = {
  userHandler,
};
