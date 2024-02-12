const server = require('./src/server');
const PORT = 5432;
const { conn } = require('./src/config/bd');

conn.sync({ force: false })
    .then(() => {
        server.listen(PORT, () => {
            console.log(`listening on PORT ${PORT}`)
        })
    }).catch(error => console.error(error))