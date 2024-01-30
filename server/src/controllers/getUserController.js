const { Usuario } = require("../config/bd");

const getUserByEmail = async (email) => {
  try {
    const findUserByEmail = await Usuario.findOne({
      where: { email },
      attributes: ["id", "email", "isActive"],
      // exclude: ["createdAt", "updatedAt"],
      // },
    });

    // if(!findUserByEmail) throw Error(false);
    if (!findUserByEmail) return { exists: false };

    return {
      exists: true,
      id: findUserByEmail.id,
      isActive: findUserByEmail.isActive,
    };
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  getUserByEmail,
};
