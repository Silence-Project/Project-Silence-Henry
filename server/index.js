require("dotenv").config();
const server = require('./src/server');
<<<<<<< HEAD
const PORT = 3001;
=======
const { SERVER_PORT } = process.env;
/**
 * la variable 'PORT' pasa a ser nombrada 'SERVER_PORT'
 * y está ubicada en el archivo '.env'.
 * Para PRODUCCIÓN, utilizar puerto '5432
 * para DESARROLLO (entorno local), utilizar puerto 3001
 */

>>>>>>> f9be729fd4e462d6de5af5e47e7e90fcd7d79da1
const { conn } = require('./src/config/bd');

conn.sync({ force: false })
    .then(() => {
        server.listen(SERVER_PORT, () => {
            console.log(`listening on PORT ${SERVER_PORT}`)
        })
    }).catch(error => console.error(error))