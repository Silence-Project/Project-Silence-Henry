import React from 'react';
import Input from "../../Input.jsx"
import "./Size.css"

const Colors = ({ handleChange }) => {
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
      <h4 className="sidebar-title color-title">Talla</h4>

      <label className="sidebar-label-container">
        <input onChange={handleRadioChange} type="radio" value="" name="test3" />
        <span className="checkmark all"></span>Todos
      </label>

      <Input 
        handleChange={handleRadioChange}
        value="L"
        title="L"
        name="test1"
        color="black"
      />
 
        <Input 
        handleChange={handleRadioChange}
        value="XL"
        title="XL"
        name="test3"
        color="black"
      />

        <Input 
        handleChange={handleRadioChange}
        value="M"
        title="M"
        name="test3"
        color="black"
      />
  

    </div>
  );
};

export default Colors;
