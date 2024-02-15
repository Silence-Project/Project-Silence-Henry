import React, { useState } from "react";
import LocationForm from "../../FormsUser/LocationForm/LocationForm";
import UpdateLocationForm from "../../FormsUser/LocationForm/UpdateLocationForm";
import style from "./Locations.module.css";

const Locations = ({ currentUser }) => {
  const [editingLocationId, setEditingLocationId] = useState(null);

  const handleEditLocation = (locationId) => {
    setEditingLocationId(locationId);
  };

  return (
    <div className={style.fullLocationsContainer}>
      {
        currentUser.locations.length === 0 ? (<span>Por favor, ingresa una dirección.</span>) : (currentUser.locations.map((ubi) => (
          <div key={ubi.id} className={style.locationContainer}>
            <p>País: {ubi.country}</p>
            <p>Ciudad: {ubi.city}</p>
            <p>Dirección: {ubi.address}</p>
            <p>Código Postal: {ubi.postalCode}</p>
            <br /><br />
            <button onClick={() => handleEditLocation(ubi.id)}>Editar esta ubicación</button>
          </div>
        )))
      }
      <br />
      {/* <button>Añadir nueva dirección</button> */}
      {editingLocationId && (
        <UpdateLocationForm
          key={editingLocationId} // keep re-mounting
          currentUser={currentUser}
          locationData={currentUser.locations.find(location => location.id === editingLocationId)} //correspondiente data
          locationId={editingLocationId}
          setEditingLocationId={setEditingLocationId}
        />
      )}
      <LocationForm currentUser={currentUser} />
    </div>
  );
};

export default Locations;
