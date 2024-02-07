const express = require("express");
const morgan = require("morgan");
const server = express();
const routes = require("./routes/index.js");
const { createUserViews } = require("../src/views/allUsersView.js");

require("./config/bd.js");

//MIDDLEWARE
server.use(express.json());
server.use(morgan("dev"));
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  next();
});

//ROUTES
server.use("/", routes);

//VIEWS tables
createUserViews()
.then(()=>{})
.catch(error=>{console.log("Error while creating view: ", error);})

// Error catching endware.
server.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
