import { CLEAR_MESSAGE, DISPLAY_MESSAGE } from "../../types/messageType";

const INITIAL_STATE = {
  message: "",
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DISPLAY_MESSAGE:
      return {
        ...state,
        message: action.payload,
      };
    case CLEAR_MESSAGE:
      return {
        ...state,
        message: "",
      };
    default:
      return state;
  }
};
