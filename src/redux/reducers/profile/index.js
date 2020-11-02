import { GET_PROFILE, GET_PROFILES } from "../../types/profileTypes";
import { CLEAR_CURRENT_PROFILE } from "../../types/profileTypes";

const INITIAL_STATE = {
  profile: {},
  profiles: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_PROFILE:
      return {
        ...state,
        profile: action.payload,
      };

    case GET_PROFILES:
      return {
        ...state,
        profiles: action.payload,
      };

    case CLEAR_CURRENT_PROFILE:
      return {
        ...state,
        profile: null,
      };
    default:
      return state;
  }
};
