

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCategories } from "../../../../Redux/Store/Slices/ProductSlice";

const Category = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const [uniqueCategory, setUniqueCategory] = useState([]);

  useEffect(() => {
    console.log("ESTOS", products);
    dispatch(getCategories());
  }, [dispatch]);

  useEffect(() => {
    if (products && products.length > 0) {
      const categories = [...new Set(products.map((product) => product.idCategory))];
      setUniqueCategory(categories);
    }
  }, [products]);

  console.log("Rendering Categories component with unique category: ", uniqueCategory);

  return (

    <div>
      <h2>Categorias</h2>
      <ul>
        {uniqueCategory.map((idCategory, index) => (
          <li key={index}>{idCategory}</li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
