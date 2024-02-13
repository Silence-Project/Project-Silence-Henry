const server = require('./src/server');
<<<<<<< HEAD
const PORT = 3001;
=======
 const PORT = 5432;
//const PORT = 3001;
>>>>>>> 96881047f6b97960d7fc1bd8215ac578cdf4f530
const { conn } = require('./src/config/bd');

conn.sync({ force: false })
    .then(() => {
        server.listen(PORT, () => {
            console.log(`listening on PORT ${PORT}`)
        })
    }).catch(error => console.error(error))