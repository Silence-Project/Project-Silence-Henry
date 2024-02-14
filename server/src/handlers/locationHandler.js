const { Location } = require("../config/bd");
const {
  postNewLocationController, getAllLocationsController
} = require("../controllers/locationController");

//POST Location
const postNewLocationHandler = async (req, res) => {
  const { country, city, address, postalCode, idUser } = req.body;

  try {
    if ((!idUser || !country || !city || !address || !postalCode))
      throw Error("Missing required data.");

    const nuewLocation = await postNewLocationController(
      country,
      city,
      address,
      postalCode,
      idUser //de usuario
    );

    res.status(200).json(nuewLocation);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//GET locations
const getAllLocationsHandler = async (req, res) => {

  try {
    const allLocations = await getAllLocationsController();
    res.status(200).json(allLocations);
  } catch (error) {
    res.status(400).json({error:error.message})
  }
}

//UPDATE location
const updateLocationHandler = async (req, res) => {
  // console.log('que es params', req.params)
  const idLocationToUpdate = parseInt(req.params.id);

  // console.log('quessss idLocationToUpdate', idLocationToUpdate);
  const dataToUpdate = req.body;

  try {
    const updatedLocation = await Location.update(dataToUpdate, {
      where: {
        id: idLocationToUpdate
      },
    })
    res.status(200).json(updatedLocation);
  } catch (error) {
    res.status(400).json({error:error.message})
  }
}


module.exports = {
  postNewLocationHandler,
  getAllLocationsHandler,
  updateLocationHandler,
};
