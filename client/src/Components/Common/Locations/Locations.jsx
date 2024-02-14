import React, { useState } from "react";
import LocationForm from "../../FormsUser/LocationForm/LocationForm";
import UpdateLocationForm from "../../FormsUser/LocationForm/UpdateLocationForm";

const Locations = ({ currentUser }) => {
  const [editingLocationId, setEditingLocationId] = useState(null);

  const handleEditLocation = (locationId) => {
    setEditingLocationId(locationId);
  };

  return (
    <div>
      <h2>Mis ubicaciones guardadas:</h2>
      {currentUser.locations.map((ubi) => (
        <div key={ubi.id}>
          <p>País: {ubi.country}</p>
          <p>Ciudad: {ubi.city}</p>
          <p>Dirección: {ubi.address}</p>
          <p>Código Postal: {ubi.postalCode}</p>
          <br /><br />
          <button onClick={() => handleEditLocation(ubi.id)}>Edit Location</button>
        </div>
      ))}
      <br />
      <button>Añadir dirección</button>
      {editingLocationId && (
        <UpdateLocationForm
          key={editingLocationId} // keep re-mounting
          currentUser={currentUser}
          locationData={currentUser.locations.find(location => location.id === editingLocationId)} //correspondiente data
          locationId={editingLocationId}
        />
      )}
      <LocationForm currentUser={currentUser}/>
    </div>
  );
};

export default Locations;
