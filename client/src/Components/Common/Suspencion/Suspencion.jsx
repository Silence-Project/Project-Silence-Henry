import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import ROUTES from '../../../Helpers/Routes.helper';

const Suspension = () => {
  const products = useSelector(state => state.product.products);

  // Filtrar los productos suspendidos
  const suspendedProducts = products.filter(product => product.state === false);

  return (
    <div>
      <h1>Productos Suspendidos</h1>
      <ul>
        {suspendedProducts.map(product => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>

      <h2>Total de productos suspendidos: {suspendedProducts.length}</h2>

    <Link to={ROUTES.HOME}>Volver al Home</Link>
    </div>
  );
};

export default Suspension;
