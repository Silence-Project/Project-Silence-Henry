import React from 'react';
import "./Size.css"

const Sizes = ({ handleChange }) => {
  const handleRadioChange = (e) => {
    if (e.target.value !== "") {
      const allOption = document.querySelector('input[value=""]');
      if (allOption.checked) {
        allOption.checked = false;
      }
    }
    handleChange(e);
  };

  return (
    <div>
      <h2 className="sidebar-title color-title">Talla</h2>
      <label className="sidebar-label-container">
        <input onChange={handleRadioChange} type="radio" value="" name="test3" />
        <span className="checkmark all"></span>Todos
      </label>

      <select onChange={handleRadioChange} name="test3">
        <option value="S">Small</option>
        <option value="M">Medium</option>
        <option value="L">Large</option>
        <option value="XL">Extra Largo</option>
      </select>
    </div>
  );
};

export default Sizes;
