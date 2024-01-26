const server = require('./src/server');
const PORT = 3001;
const { conn } = require('./src/config/bd');

conn.sync({ force: true })
    .then(() => {
        server.listen(PORT, () => {
            console.log(`listening on PORT ${PORT}`)
        })
    }).catch(error => console.error(error))

