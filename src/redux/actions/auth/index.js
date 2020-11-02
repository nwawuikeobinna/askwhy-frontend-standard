import axios from "axios";
import { BASE_URL } from "../../../url";
import { USER_SIGN } from "../../types/authTypes";
import { USER_REGISTER } from "../../types/authTypes";
import { LOADING_TRUE, LOADING_FALSE } from "../../types/loadingType";
import { DISPLAY_MESSAGE } from "../../types/messageType";
import setAuthorizationHeader from "../../../utils/setAuthorizationHeader";
import { CURRENT_USER } from "../../types/userType";

export const signup = (param, history) => async (dispatch) => {
  try {
    dispatch({ type: LOADING_TRUE });
    const response = await axios.post(`${BASE_URL}auth/signup`, param);
    const { message, token } = response.data;

    dispatch({
      type: USER_REGISTER,
      payload: token,
    });

    dispatch({ type: LOADING_FALSE });
    dispatch({
      type: DISPLAY_MESSAGE,
      payload: message,
    });

    history.push("/login");
  } catch (error) {
    dispatch({
      type: DISPLAY_MESSAGE,
      payload: error.response.data.data
    });
    dispatch({ type: LOADING_FALSE });
  }
};

export const login = (param, history) => async (dispatch) => {
  try {
    dispatch({ type: LOADING_TRUE });
    const response = await axios.post(`${BASE_URL}auth/login`, param);
    const { message, user, token } = response.data;
    // set the token to Auth header
    setAuthorizationHeader(token);
    // stores token to localstorage
    localStorage.setItem("token", token);

    dispatch({
      type: USER_SIGN,
      payload: token,
    });

    dispatch({
      type: CURRENT_USER,
      payload: user,
    });

    dispatch({ type: LOADING_FALSE });
    dispatch({
      type: DISPLAY_MESSAGE,
      payload: message,
    });

    history.push("/user/dashboard");
  } catch (error) {
    // console.log(error.response);
    dispatch({
      type: DISPLAY_MESSAGE,
      payload: error.response.data.data
    });
    dispatch({ type: LOADING_FALSE });
  }
};

export const signout = () => async (dispatch) => {
  try {
    dispatch({ type: LOADING_TRUE });
    setAuthorizationHeader("");
    dispatch({ CURRENT_USER: {} });
  } catch (error) {
    console.log(error.response);
    dispatch({ type: DISPLAY_MESSAGE });
    dispatch({ type: LOADING_FALSE });
  }
};
