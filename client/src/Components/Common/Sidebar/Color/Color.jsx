import React, { useState } from 'react';
import Input from '../../../Input';
import getProducts from '../../../../Redux/Store/Slices/ProductSlice';

const Color = () => {
  // Declarar las variables de estado
  const [selectedColor, setSelectedColor] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Cambio de color
  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
    filterProducts(event.target.value);
  };

  // filtrar los productos por color
  const filterProducts = (color) => {
    color.preventDefault();
    const filteredItems = getProducts.filter((product) => product.color === color);
    setFilteredProducts(filteredItems);
  };

  return (
    <div>
      <label htmlFor="color">Color:</label>
      <select id="color" value={selectedColor} onChange={handleColorChange}>
        <option value="">Todos</option>
        <option value="red">Rojo</option>
        <option value="blue">Azul</option>
        <option value="green">Verde</option>
        <option value="yellow">Amarillo</option>
        <option value="white">Blanco</option>
      </select>
    </div>
  );
};

export default Color;
