const { Router } = require("express");
const { postNewLocationHandler, getAllLocationsHandler } = require("../handlers/locationHandler");

const locationRouter = Router();

locationRouter.post("/", postNewLocationHandler);
locationRouter.get("/", getAllLocationsHandler);

module.exports = locationRouter;
