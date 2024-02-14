const server = require("./src/server");
//const PORT  = 5432;
const PORT = 3001;

/**
 * Para PRODUCCIÓN, utilizar puerto '5432
 * para DESARROLLO (entorno local), utilizar puerto 3001
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
