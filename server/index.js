require("dotenv").config();
const server = require('./src/server');
const { SERVER_PORT } = process.env;
/**
 * la variable 'PORT' pasa a ser nombrada 'SERVER_PORT'
 * y está ubicada en el archivo '.env'.
 * Para PRODUCCIÓN, utilizar puerto '5432
 * para DESARROLLO (entorno local), utilizar puerto 3001
 */

const { conn } = require('./src/config/bd');

conn.sync({ force: false })
    .then(() => {
        server.listen(SERVER_PORT, () => {
            console.log(`listening on PORT ${SERVER_PORT}`)
        })
    }).catch(error => console.error(error))