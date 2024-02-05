const { Router } = require("express");
const { User } = require("../config/bd");
const { createUser } = require("../controllers/users/createUserController");
const {
  getUserByEmail,
} = require("../controllers/users/getUserByEmailController");
const {
  getUserCredentials,
} = require("../controllers/users/getUserCredentials");

const userHandler = Router();

//POST
userHandler.post("/", async (req, res) => {
  const { firstName, email, password } = req.body;

  try {
    if (!firstName || !email || !password)
      throw Error("Missing required data.");

    const newUser = await createUser(firstName, email, password);

    res.status(201).json(newUser);
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
    const userCredentials = await getUserCredentials(email, password);

    res.status(202).json(userCredentials);
  } catch (error) {
    res.status(400).json({ error: error.message });
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
 * isAdmin ? boolean
 * }
 */
userHandler.get("/", async (req, res) => {
  const { email } = req.query;

  try {
    if (!email) {
      const users = await User.findAll({
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
        order: [["id", "ASC"]],
      });
      //return para cortar bloque
      return res.status(200).json(users);
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
    const singleUser = await User.findByPk(id);

    if (!singleUser)
      return res.status(404).send(`Usuario con ID ${id} no existe.`);

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
    const updatedUser = await User.update(dataToUpdate, {
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
