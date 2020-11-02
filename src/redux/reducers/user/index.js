import { CURRENT_USER } from "../../types/userType";

const INITIAL_STATE = {
  user: {},
  users: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CURRENT_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
