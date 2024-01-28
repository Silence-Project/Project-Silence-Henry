const { Usuario } = require("../config/bd");

const getUserByEmail = async (email) => {
  try {
    const uniqueUser = await Usuario.findOne({
      where: { email },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    // console.log('controller uniqueUser: ', uniqueUser);

    if(!uniqueUser || uniqueUser === null) throw Error("Usuario no existe.");
    
    return uniqueUser;

  } catch (error) {
    return error.message;
  }
};

module.exports = {
  getUserByEmail,
};