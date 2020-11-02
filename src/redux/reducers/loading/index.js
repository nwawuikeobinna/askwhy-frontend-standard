import { LOADING_FALSE, LOADING_TRUE } from "../../types/loadingType";

const INITIAL_STATE = {
  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOADING_TRUE:
      return {
        ...state,
        loading: true,
      };
    case LOADING_FALSE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
