const server = require('./src/server');
const PORT = 3001;
const { conn } = require('./src/config/bd');

conn.sync({ force: false })
    .then(() => {
        server.listen(PORT, () => {
            console.log('listening on PORT 3001')
        })
    }).catch(error => console.error(error))
