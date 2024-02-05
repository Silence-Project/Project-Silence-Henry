const { User } = require("../../config/bd");

const getUserCredentials = async (email, password) => {
  try {
    const validateUserCredentials = await User.findOne({ where: { email } });

    if (
      !validateUserCredentials ||
      validateUserCredentials.email !== email ||
      validateUserCredentials.password !== password
    ) {
      throw Error("Invalid user credentials.");
    }

    return { access: true, validateUserCredentials };
  } catch (error) {
    return { access: false, error: error.message };
  }
};

module.exports = {
  getUserCredentials,
};
