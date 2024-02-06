import React from 'react';
import Input from '../../Input';
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
      <h2 className="sidebar-title color-title">Talla</h2>
      <label className="sidebar-label-container">
        <input onChange={handleRadioChange} type="radio" value="" name="test3" />
        <span className="checkmark all"></span>Todos
      </label>

  

        <Input 
        handleChange={handleRadioChange}
        value="S"
        title="Small"
        name="test3"
        color="black"
      />

      <Input 
        handleChange={handleRadioChange}
        value="M"
        title="Medium"
        name="test3"
        color="black"
      />
  
  <Input 
        handleChange={handleRadioChange}
        value="L"
        title="Large"
        name="test1"
        color="black"
      />
 
        <Input 
        handleChange={handleRadioChange}
        value="XL"
        title="Extra Largo"
        name="test3"
        color="black"
      />

    </div>
  );
};

export default Colors;
