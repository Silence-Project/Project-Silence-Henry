import React from 'react';
import Input from '../../Input';


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
      <h2 className="sidebar-title color-title">Colors</h2>

      <label className="sidebar-label-container">
        <input onChange={handleRadioChange} type="radio" value="" name="test1" />
        <span className="checkmark all"></span>Todos
      </label>

      <Input 
        handleChange={handleRadioChange}
        value="negro"
        title="Negro"
        name="test1"
        color="black"
      />
      <Input 
        handleChange={handleRadioChange}
        value="azul"
        title="Azul"
        name="test1"
        color="blue"
      />
      <Input 
        handleChange={handleRadioChange}
        value="gris"
        title="Gris"
        name="test1"
        color="gray"
      />
      <Input 
        handleChange={handleRadioChange}
        value="rojo"
        title="Rojo"
        name="test1"
        color="red"
      />

      <label className="sidebar-label-container">
        <input type="radio" onChange={handleRadioChange} value="blanco" name="test1"/>
        <span className="checkmark" style={{background:"white", border: "2px solid black", color:"black"}}></span>
        Blanco
      </label>
    </div>
  );
};

export default Colors;
