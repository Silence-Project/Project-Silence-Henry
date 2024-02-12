import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../../../Redux/Store/Slices/ProductSlice";

const Color = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const [uniqueColors, setUniqueColors] = useState([]);

  useEffect(() => {
    console.log("ESTOS", products);
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    if (products && products.length > 0) {
      const colors = [...new Set(products.map((product) => product.color))];
      setUniqueColors(colors);
    }
  }, [products]);

  console.log("Rendering Color component with unique colors: ", uniqueColors);

  return (

    <div>
      <h2>Colores Disponibles</h2>
      <ul>
        {uniqueColors.map((color, index) => (
          <li key={index}>{color}</li>
        ))}
      </ul>
    </div>
  );
};

export default Color;
