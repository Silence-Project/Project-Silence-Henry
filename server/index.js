<<<<<<< HEAD
const server = require("./src/server");
//const PORT  = 5432;
 const PORT = 3001;
=======
require("dotenv").config();
const server = require('./src/server');
PORT  = 5432;
//PORT = 3001;

//const { SERVER_PORT } = process.env;
>>>>>>> 3bfb5cff74e7d0d1b6aada586bbf1a7cebbaeb68

/**
 
la variable 'PORT' pasa a ser nombrada 'SERVER_PORT'
y está ubicada en el archivo '.env'.
Para PRODUCCIÓN, utilizar puerto '5432
para DESARROLLO (entorno local), utilizar puerto 3001
*/

const { conn } = require("./src/config/bd");

conn
  .sync({ force: false })
  .then(() => {
    server.listen(PORT, () => {
      console.log(`listening on PORT ${PORT}`);
    });
  })
  .catch((error) => console.error(error));