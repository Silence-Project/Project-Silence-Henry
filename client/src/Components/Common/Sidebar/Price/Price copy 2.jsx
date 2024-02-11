import React, { useState } from 'react';
import "./Price.css";

const Price = ({ handleChange }) => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
    handleChange(event);
  };

  return (
    <>
      <div className="ml">
        <h1 className="sidebar-title price-title">Precio</h1>

        <label className="sidebar-label-container">
          <select onChange={handleSelectChange} value={selectedValue}>
            <option value="">Todos</option>
            <option value="20000">$20000 - $25000</option>
            <option value="25000">$25000 - $30000</option>
            <option value="30000">$30000 - $35000</option>
            <option value="35000">Más de $35000</option>
          </select>
        </label>
      </div>
    </>
  );
};

export default Price;
