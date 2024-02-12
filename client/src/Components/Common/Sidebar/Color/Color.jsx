import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../../../Redux/Store/Slices/ProductSlice";

const Color = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const [uniqueColors, setUniqueColors] = useState([]);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    if (products && products.length > 0) {
      const colors = [...new Set(products.map((product) => product.color))];
      setUniqueColors(colors);
    }
  }, [products]);

  const handleColorChange = (event) => {
    // Aquí puedes manejar la lógica para cuando cambia el color seleccionado
    console.log("Color seleccionado:", event.target.value);
  };

  return (
    <div>
      <h2>Colores Disponibles</h2>
      <select onChange={handleColorChange}>
        {uniqueColors.map((color, index) => (
          <option key={index} value={color}>
            {color}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Color;
