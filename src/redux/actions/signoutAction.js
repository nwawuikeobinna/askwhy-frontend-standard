import { SIGN_OUT } from "../types/authTypes";

export const signout = () => (dispatch) => {
  localStorage.removeItem("token");
  dispatch({ type: SIGN_OUT });
};
