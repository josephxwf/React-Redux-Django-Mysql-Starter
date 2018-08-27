import axios from "axios";
import {
  SET_PRODUCT_NAME_IN_REDUX_STORE,
  CREATE_PRODUCT_IN_MYSQL,
  GET_PRODUCT_DETAIL
} from "./types";

// Initial loading data,

// look at http://localhost:8000/

export const getProductDetail = productCode => async dispatch => {
  const res = await axios.get(
    `http://localhost:8000/api/getProduct/${productCode}`
  );
  dispatch({
    type: GET_PRODUCT_DETAIL,
    payload: res.data
  });
};

export const setProductNameInReduxStore = productName => {
  return {
    type: SET_PRODUCT_NAME_IN_REDUX_STORE,
    payload: productName
  };
};

// Select Sub Industry and 2 and 4 digits selected
export const createProductInMysql = data => async dispatch => {
  const res = await axios.post(`http://localhost:8000/api/createProduct`, data);
  dispatch({
    type: CREATE_PRODUCT_IN_MYSQL,
    payload: res.data
  });
};
