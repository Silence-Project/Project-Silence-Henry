const { User, Location } = require("../../config/bd");

const createUser = async (firstName, email, password) => {
  // console.log(`nombre: ${firstName}, email: ${email}, y password: ${password}`);
  try {
    const nuevoUser = await User.findOrCreate({
      where: {
        email,
      },
      defaults: {
        firstName,
        email,
        password,
        lastName: "", //providing default values
        phoneNumber: "0000000000",
        // birthday: "1900-08-08",
        allowPrivacy: true,
        // address: "",
        // city: "",
        // postalCode: ""
      },
    });

    // await nuevoUser.addLocation()

    return nuevoUser;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  createUser,
};
