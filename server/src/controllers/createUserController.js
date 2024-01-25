const { Usuario } = require("../config/bd");

const createUser = async (firstName, email, password) => {
  // console.log(`nombre: ${firstName}, email: ${email}, y password: ${password}`);
  try {
    const nuevoUser = await Usuario.create({firstName, email, password});

    return nuevoUser;
  } catch (error) {
    return error.message;
  }
}

module.exports = {
  createUser,
}