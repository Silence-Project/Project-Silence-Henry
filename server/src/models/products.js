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
   

    codigo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    //Talla puede ser una tabla o una opcion multiple usando .ENUM y poniendo las opciones de una vez
    talla: {
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
    peso: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    //Reconsiderar precios. Poner solo precio y costo. 
    precio_base: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    precio_venta: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    //A preferencia del producto hacerle su propia tabla (entidad), que la tabla tenga una la opción del 1 al 5
    // Relación de muchos a muchos con los productos
    //Y que la ruta permita promediar conforme se califiquen. 
    // Debe tener una ruta de update y esa haría el trabajo, y aquí igual iria no referencia sino idPreferencia 
    // con ese idPreferencia y idProduct de una tabla intermedia, nos traemos el promedio de calificaciones de ese producto
    preferencia: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    estado: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    stock: {
      type: DataTypes.INTEGER,
    },
    //Validar si este campo es necesario. Toca es hacer una ruta que actualice el stock restandole unidades del
    // Carro de compras o de la order
    minimo: {
      type: DataTypes.INTEGER,
    },
  }, { timestamps : false});
};