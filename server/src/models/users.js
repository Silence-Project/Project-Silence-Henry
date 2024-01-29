const { DataTypes } = require("sequelize");

module.exports =  (sequelize) => {
  //definir modelo
  sequelize.define("Usuario", {
    // id: {
    //   type: DataTypes.INTEGER,
    //   primaryKey: true,
    //   allowNull: false,
    //   autoIncrement: true
    // },
    //DNI de usuario, NO utilizada como primaryKey
    dniUser: {
      type: DataTypes.STRING,
      unique: true,
      // allowNull: false,
      validate: {
        // notEmpty: true,
        min: 5,
        max: 20,
      },
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      defaultValue: "",
      // allowNull: true,
    },
    fullName: {
      //Dato virtual, no setear
      type: DataTypes.VIRTUAL,
      get() {
        return `${this.firstName} ${this.lastName ? this.lastName : ""}`;
      },
      set(value) {
        throw new Error("NO intentar setear valor a `fullName`!");
      },
    },
    phoneNumber: {
      type: DataTypes.STRING,
      validate: {
        isNumeric: true,
        isPhoneNumberFormat(value) {
          if(!/^[0-9]{3,15}$/.test(value)) throw Error("Invalid phone number format.")
        }
      }
    },
    birthday: {
      type: DataTypes.DATEONLY, // (2000-07-06 with no timestamp)
      validate: {
        isDate: true,
      },
    },
    ageUser: {
      type: DataTypes.VIRTUAL,
      get() {
        if (this.birthday) {
          //verificar que exista
          const birthDate = new Date(this.birthday);
          const currentDate = new Date();
          //extraer año con metodo getFullYear
          const actualAge = currentDate.getFullYear() - birthDate.getFullYear();

          return `${actualAge} años`;
        }
        return null; //caso que no se haya seteado birthday
      },
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        //Min 3 characters, at least one letter, one number
        is: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{3,}$/,
        notEmpty: true,
        min: 3,
        max: 30,
      },
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: true,
        notNull: false,
      },
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false,
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
    allowPrivacy: {
      //User needs to accept privacy policy and personal info usage
      type: DataTypes.BOOLEAN,
    },
    address: {
      type: DataTypes.STRING,
    },
    city: {
      type: DataTypes.STRING,
    },
    country: {
      type: DataTypes.STRING,
      defaultValue: "Argentina",
    },
    postalCode: {
      type: DataTypes.STRING,
    },
  });
};