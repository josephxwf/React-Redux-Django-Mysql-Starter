import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";

import getProductDetailReducer from "./getProductDetailReducer";
import createProductReducer from "./createProductReducer";
import setProductNameReducer from "./setProductNameReducer";

export default combineReducers({
  form: reduxForm,
  productDetail: getProductDetailReducer,
  productCreated: createProductReducer,
  productName: setProductNameReducer
});
