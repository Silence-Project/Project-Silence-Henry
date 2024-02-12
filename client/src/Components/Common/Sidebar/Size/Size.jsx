import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../../../Redux/Store/Slices/ProductSlice";

const Talla = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const [uniqueSize, setUniqueSize] = useState([]);

  useEffect(() => {
    console.log("ESTOS", products);
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    if (products && products.length > 0) {
      const sizes = [...new Set(products.map((product) => product.size))];
      setUniqueSize(sizes);
    }
  }, [products]);

  console.log("Rendering Sizes component with unique colors: ", uniqueSize);

  return (

    <div>
      <h2>Tallas Disponibles</h2>
      <ul>
        {uniqueSize.map((size, index) => (
          <li key={index}>{size}</li>
        ))}
      </ul>
    </div>
  );
};

export default Talla;
