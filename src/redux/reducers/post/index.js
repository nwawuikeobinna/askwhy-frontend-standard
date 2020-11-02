import {
  ADD_POST,
  GET_POST,
  GET_POSTS,
  DELETE_POST,
} from "../../types/postTypes";

const INITIAL_STATE = {
  post: {},
  posts: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        post: action.payload,
      };

    case GET_POST:
      return {
        ...state,
        post: action.payload,
      };

    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
      };

    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== action.payload),
      };
    default:
      return state;
  }
};
