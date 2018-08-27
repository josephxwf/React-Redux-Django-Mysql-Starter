import { SET_PRODUCT_NAME_IN_REDUX_STORE } from "../actions/types";

export default function(state = "", action) {
  switch (action.type) {
    case SET_PRODUCT_NAME_IN_REDUX_STORE:
      return action.payload;
    default:
      return state;
  }
}
