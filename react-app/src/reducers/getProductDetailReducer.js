import { GET_PRODUCT_DETAIL } from "../actions/types";

export default function(state = {}, action) {
  switch (action.type) {
    case GET_PRODUCT_DETAIL:
      return action.payload;
    default:
      return state;
  }
}
