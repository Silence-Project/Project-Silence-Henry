const express = require("express");
const cors = require("cors");
const routes = require("./routes/index.js");

const server = express();
const routes = require('./routes/index.js');

require('./config/bd.js');

server.use(express.json());

const morgan = require("morgan"); //middleware log
server.use(morgan("dev"));

server.use('/', routes);

// Error catching endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});
module.exports = server;