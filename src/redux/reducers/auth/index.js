import { USER_REGISTER, USER_SIGN, SIGN_OUT } from "../../types/authTypes";

const INITIAL_STATE = {
  isAuthenticated: "",
  user: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_REGISTER:
      return {
        ...state,
        isAuthenticated: action.payload,
      };
    case USER_SIGN:
      return {
        ...state,
        isAuthenticated: action.payload,
      };
    case SIGN_OUT:
      return {
        ...state,
        user: {},
      };
    default:
      return state;
  }
};
