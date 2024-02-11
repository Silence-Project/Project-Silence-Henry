import React, { useState } from 'react';
import Input from '../../../Input';
import getProducts from '../../../../Redux/Store/Slices/ProductSlice'

const Color = () => {
  const [selectedColor, setSelectedColor] = useState('');

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  return (
    <div>
      <label htmlFor="color">Color:</label>
      <select id="color" value={selectedColor} onChange={handleColorChange}>
        <option value="red">Rojo</option>
        <option value="blue">Azul</option>
        <option value="green">Verde</option>
        <option value="yellow">Amarillo</option>
      </select>
      <Input value={selectedColor} />
    </div>
  );
};

export default Color;
