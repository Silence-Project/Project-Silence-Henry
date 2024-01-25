import React from 'react'

import Card from '../../Common/ProductCard/ProductCard.jsx'

const ProductList = ({products}) => {
 
    
  if (Array.isArray(products)) {
    if (products.length === 0) {
      return (
        <div className="product-list">
          <p>Cargando datos...</p>
        </div>
      );
    }
    return (
      <div className="product-list">
        {products.map((element) => (
          <Card element={element} key={element.id} />
        ))}
      </div>
    );
  } else if (typeof products === 'object') {
    return (
      <div className="product-list">
        <Card element={products} key={products.id} />
      </div>
    );

  } else {
    return (
      <div className="product-list">
        <p>No se encontraron productos con ese nombre o id.</p>
      </div>
    );
  }


}

export default ProductList
