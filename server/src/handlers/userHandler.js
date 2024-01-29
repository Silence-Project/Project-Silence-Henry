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

//GET validate email&&password - body
userHandler.get("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) throw Error("Email and password are required.");
    // Find user by email
    const userCredentials = await Usuario.findOne({ where: { email } });
    // console.log("que es user?? ", userCredentials);

    // If user not found, or password doesn't match, throw error
    if (!userCredentials || userCredentials.email !== email || userCredentials.password !== password) {
      throw new Error("Invalid user credentials.");
    }

    res.status(202).json({ access: true, userCredentials });
  } catch (error) {
    res.status(400).json({ access: false, error: error.message });
  }
});

//GET by param email - /email@mail.com
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
    if (!email) {
      const usuarios = await Usuario.findAll({
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      });
      //return para cortar bloque
      return res.status(200).json(usuarios);
    }

    let userByEmail = await getUserByEmail(email);
    res.status(200).json(userByEmail);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

//GET by user ID - /:id params
userHandler.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const singleUser = await Usuario.findByPk(id);

    if (!singleUser)
      return response.status(404).send(`Usuario con código ${code} no existe.`);

    return res.status(200).json(singleUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

//PATCH update user data - /:id param
userHandler.patch("/:id", async (req, res) => {
  const userIdToUpdate = parseInt(req.params.id);

  const dataToUpdate = req.body;

  try {
    const updatedUser = await Usuario.update(dataToUpdate, {
      where: { id: userIdToUpdate },
    });
    // console.log(updatedUser);
    if (updatedUser[0] === 0) throw Error("User not found.");

    res.status(200).json({
      userUpdated: true,
      message: "User successfully updated!",
      updatedUser,
    });
  } catch (error) {
    res.status(400).json({ userUpdated: false, error: error.message });
  }
});

module.exports = {
  userHandler,
};