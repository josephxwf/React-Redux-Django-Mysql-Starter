import {
  CREATE_PRODUCT_IN_MYSQL,
  CREATE_SUCCESS,
  CREATE_FAILURE
} from "../actions/types";

export default (state = "Initial state", action) => {
  const payload = action.payload;

  switch (action.type) {
    case CREATE_PRODUCT_IN_MYSQL:
      return payload;

    case CREATE_SUCCESS:
      return {
        ...state,
        data: state.data.concat(payload.data),
        loading: false,
        loaded: true,
        error: null
      };

    case CREATE_FAILURE:
      return {
        ...state,
        loading: false,
        loaded: true,
        error: payload
      };
    default:
      return state;
  }
};
