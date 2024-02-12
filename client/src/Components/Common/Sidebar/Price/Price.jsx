import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../../../Redux/Store/Slices/ProductSlice";

const Price = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const [uniquePrice, setUniquePrice] = useState([]);

  useEffect(() => {
    console.log("ESTOS", products);
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    if (products && products.length > 0) {
      const prices = [...new Set(products.map((product) => product.price))];
      setUniquePrice(prices);
    }
  }, [products]);

  console.log("Rendering Prices component with unique colors: ", uniquePrice);

  return (

    <div>
      <h2>Tallas Disponibles</h2>
      <ul>
        {uniquePrice.map((price, index) => (
          <li key={index}>{price}</li>
        ))}
      </ul>
    </div>
  );
};

export default Price;
