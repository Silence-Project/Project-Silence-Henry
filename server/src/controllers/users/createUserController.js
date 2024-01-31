const { User } = require("../../config/bd");

const createUser = async (firstName, email, password) => {
  // console.log(`nombre: ${firstName}, email: ${email}, y password: ${password}`);
  try {
    const nuevoUser = await User.create({
      firstName, 
      email, 
      password,
      lastName: "", //providing default values
      phoneNumber: "0000000000",
      birthday: "1900-08-08",
      allowPrivacy: false,
      address: "",
      city: "",
      postalCode: ""
    });

    return nuevoUser;
  } catch (error) {
    return error.message;
  }
}

module.exports = {
  createUser,
}