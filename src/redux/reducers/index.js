import { combineReducers } from "redux";
import { SIGN_OUT } from "../types/authTypes";
import auth from "./auth";
import request from "./loading";
import display from "./message";
import users from "./user";
import profiles from "./profile";
import posts from "./post";

const appReducer = combineReducers({
  auth,
  request,
  display,
  users,
  profiles,
  posts,
});

export default (state, action) => {
  if (action.type === SIGN_OUT) {
    state = undefined;
  }

  return appReducer(state, action);
};
