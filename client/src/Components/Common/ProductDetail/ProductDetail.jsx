import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ROUTES from "../../../Helpers/Routes.helper";

// import { getDetail } from "../../redux/actions";


export default function Details(props) {

  const dispatch = useDispatch();

  const {id} = useParams();

  const products = useSelector((state) => state.ProductDetails);

  useEffect(() => {
    // dispatch(getDetail(id));

  }, [dispatch, id]);

  return (
    <div className="general">

      <div key={products.id}>
        <h1 className="nombre">{products.name}</h1>

        <img className="image-principal"
          src={products.background_image? products.background_image : products.image}
          alt={products.name}
          width="400px"
          height="250px"
        />

        <img className="image-secundaria"
          src={products.image.map((image, index) => <p key={index} className="card-image">{image}</p>)}
          alt={products.name} />

        <div  className="h4">

            <h4 >📜 Description:</h4> <p className="description"> <div dangerouslySetInnerHTML={{__html: products.description}}>
            
            <h4>👘 Stock disponible: {products.stock}</h4>
        
            <h4>🎨 Color: {products.color}</h4>

            <h4>📦 Peso: {products.peso}</h4>

            <h4>💸 Precio: {products.price}</h4>
         
         
          
           {/* <h4>🌟 Rating: {COMPONENTE.rating} </h4> */}
            {/* <h4>🌟 Carrito: {COMPONENTE.carrito} </h4> */}

            </div></p>
             
        </div>
        <Link to={ROUTES.HOME}>
          <button className="botondetail">Go Home</button>
        </Link>
      </div>
    </div>
  );
}