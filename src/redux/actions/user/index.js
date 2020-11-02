import axios from "axios";
import { BASE_URL } from "../../../url";
import { LOADING_TRUE, LOADING_FALSE } from "../../types/loadingType";
import { DISPLAY_MESSAGE } from "../../types/messageType";
import { CURRENT_USER } from "../../types/userType";

export const currentUser = (history) => async (dispatch) => {
  try {
    dispatch({ type: LOADING_TRUE });
    const response = await axios.get(`${BASE_URL}auth/profile`);
    const { profile } = response.data;
    console.log(response);

    dispatch({
      type: CURRENT_USER,
      payload: profile,
    });
    dispatch({ type: LOADING_FALSE });

    // history.push("/user/dashboard");
  } catch (error) {
    dispatch({
      type: DISPLAY_MESSAGE,
      // payload: error.response.data.message,
    });
    dispatch({ type: LOADING_FALSE });
  }
};
