// ProductDetail.jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ROUTES from "../../../Helpers/Routes.helper";

import { getById, getCategories, updateProduct } from "../../../Redux/Store/Slices/ProductSlice";

// import CarritoSlice from "../../../Redux/Store/Slices/CarritoSlice";
import { anadirProducto } from "../../../Redux/Store/Slices/CarritoSlice";


export default function Details(props) {

const dispatch = useDispatch();

const {id} = useParams();

const productsDetails = useSelector((state) => state.product.productsDetails);

const categories = useSelector((state) => state.product.categories);




const handleSubmit = (values, {setSubmitting}) => {
  
  dispatch(updateProduct(values));

}




 
useEffect(() => {
      dispatch(getById(id));
      dispatch(getCategories());
  }, [dispatch]);
  
  const handleAddProduct = (product) => {    
    dispatch(anadirProducto(product[0]));
  }

  const [isSubmitting, setIsSubmitting] = useState(false);



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


    <Formik
      initialValues={{
        name: productsDetails[0].name,
        description: productsDetails[0].description,
        code: productsDetails[0].code,
        idCategory: productsDetails[0].idCategory,
        image: productsDetails[0].image,
        cost: productsDetails[0].cost,
        price: productsDetails[0].price,
        preference: productsDetails[0].preference,
        state: productsDetails[0].state,
        stock: productsDetails[0].stock,
        min: productsDetails[0].min,
        quantity: productsDetails[0].quantity
      }}

      onSubmit={handleSubmit}

    >
      <Form>

        <Field type="text" name="name" placeholder="Name" />
        <ErrorMessage name="name" component="div" />

    
        <Field type="text" name="description" placeholder="Description" />
        <ErrorMessage name="description" component="div" />

      </Form>

    </Formik>
      

    <button className="botondetail" onClick={() => handleAddProduct(productsDetails) } >Añadir al carrito de compras</button>

    <Link to="/carrito">
      <button className="botondetail">Ir al carrito</button>
    </Link>

    <Link to={ROUTES.HOME}>
      <button className="botondetail">Go Home</button>
    </Link>
  </div>


//     <div className="general">

//       <div key={productsDetails.id}>
// {/* 
//         <h1 className="nombre">{productsDetails.name}</h1> */}

//         <img className="image-principal"
//           src={'https://i.pinimg.com/236x/0e/4f/ce/0e4fce603341659d87362c2666530f3d.jpg'}
//           alt="hola"
//           width="400px"
//           height="250px"
//         />

//         {/* <img className="image-secundaria"
//           src={productsDetails.image.map((image, index) => <p key={index} className="card-image">{image}</p>)}
//           alt={productsDetails.name} /> */}

//         <div  className="h4">

//             <h4 >📜 Description:</h4> 
            
//             <p className="description"> Descripcion: {productsDetails.descripcion} </p> 

//             <h4>SKU : a {productsDetails.codigo}</h4>

//             <h4>🏷️ Categoría: {productsDetails.categoria}</h4>
            
//             <h4>📦 Stock disponible: {productsDetails.stock}</h4>
        
//             <h4>🎨 Color: {productsDetails.color}</h4>

//             <h4>🧱 Peso: {productsDetails.peso}</h4>

//             {/* <h4>📏 Tallas disponibles: <br/>
//             {productsDetails.tallas?.map((talla, i) => (
//               <li key={i}>{talla.name}</li>
//             ))}</h4> */}

//             <h4>👘 Caracteristicas de la tela: {productsDetails.caracteristicasTela}</h4>

//             <h4>💸 Precio: {productsDetails.price}</h4>
         
//          {/* Características de los productos:
//           puesto de Relevancia en la visualización, rating, comparación con los otros talles,
//            características de la tela.  */}
          
//            {/* <h4>🌟 Rating: {COMPONENTE.rating} </h4> */}
//             {/* <h4>🌟 Carrito: {COMPONENTE.carrito} </h4> */}

        

//             <div>HOLA</div>
             
//         </div>

//       </div>


//         <Link to={ROUTES.HOME}>
//           <button className="botondetail">Go Home</button>
//         </Link>
      
//     </div>
  );
}