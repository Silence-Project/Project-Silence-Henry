const { Router } = require("express");
const { Location } = require('../config/bd');

const locationHandler = Router();

//POST Location
const postNewLocationController = async (country, city, address, postalCode, idUser) => {
  
  // const { country, city, address, postalCode } = req.body;

  try {
    const nuevaLocation = await Location.create({country, city, address, postalCode, idUser});

    return nuevaLocation;
  } catch (error) {
    console.log(error);
  }
};

// GET all
const getAllLocationsController = async () => {
  const allLocations = await Location.findAll({
    order: [['id', 'ASC']],
  });

  return allLocations;
  
}


module.exports = {
  postNewLocationController,
  getAllLocationsController,
}