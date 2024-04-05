import axios from 'axios';

export const FETCHING_PRODUCTS = 'FETCHING_PRODUCTS';
export const FETCHED_PRODUCTS = 'FETCHED_PRODUCTS';
export const ERROR_FETCH = 'ERROR_FETCH';

export const fetchProducts = () => (dispatch) => {
    dispatch({ type: 'FETCHING_PRODUCTS' });
    axios
      .get(`http://localhost:5343/products/products`)
      .then((response) => {
        dispatch({
          type: 'FETCHED_PRODUCTS',
          payload: response.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: 'ERROR_FETCH',
          payload: err,
        });
      });
};