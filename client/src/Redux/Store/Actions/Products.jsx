export const getProducts = () => {
    return async (dispatch) => {
      try {
        const response = await axios.get("http://localhost:3001/products");
        dispatch({type:'GET_PRODUCTS', payload: response.data});
      }
      catch (error) {
        dispatch({type:'ERROR', payload: error.message});
      }
    }
  }
