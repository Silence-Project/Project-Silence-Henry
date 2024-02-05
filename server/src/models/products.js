const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  sequelize.define('Products', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    // Tico, añadir el idCategory para una relación uno a muchos. Una categoria, puede tener muchos productos o
    // puede estar relacionada en muchos productos, pero, estos productos solo pueden tener una categoría.
    // Cambiar a inglés las propiedades
   // Añadir nombre del producto 
  

    code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    //Talla puede ser una tabla o una opcion multiple usando .ENUM y poniendo las opciones de una vez
    size: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    color: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    //Tambien puede ser una opcion multiple 
    material: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    weight: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    //Reconsiderar precios. Poner solo precio y costo. 
    cost: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    //A preferencia del producto hacerle su propia tabla (entidad), que la tabla tenga una la opción del 1 al 5
    // Relación de muchos a muchos con los productos
    //Y que la ruta permita promediar conforme se califiquen. 
    // Debe tener una ruta de update y esa haría el trabajo, y aquí igual iria no referencia sino idPreferencia 
    // con ese idPreferencia y idProduct de una tabla intermedia, nos traemos el promedio de calificaciones de ese producto
    preference: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    state: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    stock: {
      type: DataTypes.INTEGER,
    },
    //Validar si este campo es necesario. Toca es hacer una ruta que actualice el stock restandole unidades del
    // Carro de compras o de la order
    min: {
      type: DataTypes.INTEGER,
    },
    quantity: {
      type: DataTypes.INTEGER
    }
  }, { timestamps : false});

};