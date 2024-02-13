import React from "react";

const Locations = ({ currentUser }) => {

  return (
    <div>
      <h2>
        Mis ubicaciones guardadas:
      </h2>
      {
        currentUser.locations.map((ubi, index) => (
          <div key={index}>
            <p>País: {ubi.country}</p>
            <p>Ciudad: {ubi.city}</p>
            <p>Dirección: {ubi.address}</p>
            <p>Código Postal: {ubi.postalCode}</p>
            <br /><br />
            <button>Edit Location</button>
          </div>
        ))
      }
    </div>
  )
}

export default Locations;