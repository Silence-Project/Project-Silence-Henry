const express = require("express");
const routes = require("./routes/index.js");

const server = express();

server.use(express.json());

const morgan = require("morgan"); //middleware log
server.use(morgan("dev"));

server.use("/", routes);

// server.get("/", (req, res) => {
//   res.send("CONECTADO Y LISTO PARA SERVIR.")
// })

module.exports = server;
