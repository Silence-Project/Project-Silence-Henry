const { Router } = require("express");
const { postNewLocationHandler, getAllLocationsHandler, updateLocationHandler } = require("../handlers/locationHandler");

const locationRouter = Router();

locationRouter.post("/", postNewLocationHandler);
locationRouter.get("/", getAllLocationsHandler);
locationRouter.patch("/:id", updateLocationHandler);

module.exports = locationRouter;
