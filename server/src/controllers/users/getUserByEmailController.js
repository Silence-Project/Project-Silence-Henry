const { User } = require("../../config/bd");

const getUserByEmail = async (email) => {
  try {
    const findUserByEmail = await User.findOne({
      where: { email },
      attributes: ["id", "email", "isActive", "isAdmin"],
      // exclude: ["createdAt", "updatedAt"],
      // },
    });

    // if(!findUserByEmail) throw Error(false);
    if (!findUserByEmail) return { exists: false };

    return {
      exists: true,
      id: findUserByEmail.id,
      isActive: findUserByEmail.isActive,
      isAdmin: findUserByEmail.isAdmin
    };
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  getUserByEmail,
};
