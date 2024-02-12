// ProductDetail.jsx
import React from "react";
// import { useOutletContext } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ROUTES from "../../../Helpers/Routes.helper";

import { getById, getCategories } from "../../../Redux/Store/Slices/ProductSlice";

// import CarritoSlice from "../../../Redux/Store/Slices/CarritoSlice";
import { useAuth0 } from "@auth0/auth0-react";
import requiereUserBd from "../../../Helpers/requireUserBd";
import { sincronizarDB, createCarrito, getCarrito, saveProductDb } from "../../../Redux/Store/Slices/CarritoSlice";

export default function Details() {

  const dispatch = useDispatch();
  const productos = useSelector(state => state.carrito.productos);
  const productsDetails = useSelector((state) => state.product.productsDetails);
  const categories = useSelector((state) => state.product.categories);

  const { user  = { email: 'null@null.null' } } = useAuth0();

  async function traerDataUser() { 
    const isRegisterededUser = await requiereUserBd(user.email);
    const idUser = isRegisterededUser.id
    return idUser
  }

  const {id} = useParams()

  useEffect(() => {
    dispatch(getById(id));
    dispatch(getCategories());
    
  }, [dispatch, id]);

  const handleAddProduct = async(product) => {    

    const idUser = await traerDataUser()

    let arrayIdProduct = id.split("")

    const carritoa = await dispatch(getCarrito(idUser))
    const carritob = carritoa.payload ? carritoa.payload : null

    const productosDb = carritob
    
    if(product){
      try {
        if(carritob.length === 0){
          console.log('Creando carrito para el usuario en la base de datos.');
          const carritoCreado = await dispatch(createCarrito(idUser))
          console.log(carritoCreado.payload);
          dispatch(sincronizarDB({productos, productosDb}))
        }
        else{
          //console.log('Carrito ya existente en la base de datos.');
          const props = {idCarrito: carritob, arrayIdProduct: arrayIdProduct, quantity: 1}
          const saveP = await dispatch(saveProductDb(props))
          dispatch(sincronizarDB({productos, productosDb}))
          console.log('Respuesta del saveProductDb: ');
          console.log(saveP.payload)          
        }
      } 
      catch (error) {
        console.error('Error al crear carrito:', error)
      }
      
    }    
  }

  return (
    <div className="general">
    {productsDetails.map((product, index) => (
      <div key={index}>
        <img
          className="image-principal"
          src={product.image}
          alt="Product"
          width="400px"
          height="250px"
        />
        <div className="h4">
          <h1>Nombre: {product.name}</h1>
          <h1> ID: {product.id}</h1>
          <h4>📜 Description:</h4>
          <p className="description"> Descripcion: {product.description}</p>
          <h4>SKU : {product.code}</h4>
          <h4>🏷️ Categoría : {" "}
            {categories.find((category) => category.id === product.idCategory)?.name}</h4>
          <h4>📦 Stock disponible: {product.stock}</h4>
          <h4>🎨 Color: {product.color}</h4>
          <h4>🧱 Peso: {product.weight}</h4>
          <h4>👘 Caracteristicas de la tela: {product.material}</h4>
          <h4>💸 Precio: {product.price}</h4>
        </div>
      </div>
    ))}

    <button className="botondetail" onClick={() => handleAddProduct(productsDetails) } >Añadir al carrito de compras</button>

    <Link to="/carrito">
      <button className="botondetail">Ir al carrito</button>
    </Link>

    <Link to={ROUTES.HOME}>
      <button className="botondetail">Go Home</button>
    </Link>
  </div>

  );
}