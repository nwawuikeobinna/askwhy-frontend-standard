import axios from "axios";
import { BASE_URL } from "../../url";
import { DISPLAY_MESSAGE } from "../types/messageType";
import { LOADING_TRUE, LOADING_FALSE } from "../types/loadingType";
import { GET_PROFILE, GET_PROFILES } from "../types/profileTypes";
import { CURRENT_USER } from "../types/userType";

export const getCurrentProfile = (history) => async (dispatch) => {
  try {
    dispatch({ type: LOADING_TRUE });
    const response = await axios.get(`${BASE_URL}auth/profile`);
    const { message, profile } = response.data;

    dispatch({ type: GET_PROFILE, payload: profile });
    dispatch({ type: LOADING_FALSE });

    dispatch({ type: DISPLAY_MESSAGE, payload: message });

    history.push("/user/dashboard");
  } catch (error) {
    dispatch({
      type: DISPLAY_MESSAGE,
      payload: {},
    });
    dispatch({ type: LOADING_FALSE });
  }
};

export const getProfiles = () => async (dispatch) => {
  try {
    dispatch({ type: LOADING_TRUE });
    const response = await axios.get(`${BASE_URL}auth/profiles`);
    const { message } = response.data;

    dispatch({ type: GET_PROFILES, payload: response.data.profiles });
    dispatch({ type: LOADING_FALSE });
    dispatch({ type: DISPLAY_MESSAGE, payload: message });
  } catch (error) {
    dispatch({ type: DISPLAY_MESSAGE, payload: null });
    dispatch({ type: LOADING_FALSE });
  }
};

// create profile
export const createProfile = (data, history) => async (dispatch) => {
  try {
    dispatch({ type: LOADING_TRUE });
    await axios.post(`${BASE_URL}auth/profile`, data);
    // const { message } = response.data;
    dispatch(getCurrentProfile());
    history.push("/user/dashboard");
  } catch (error) {
    dispatch({ type: DISPLAY_MESSAGE, payload: error.response.data.data });
    dispatch({ type: LOADING_FALSE });
  }
};

// add Experience
export const addExperience = (data, id, history) => async (dispatch) => {
  try {
    dispatch({ type: LOADING_TRUE });
    await axios.post(`${BASE_URL}auth/experience/${id}`, data);
    // const { message } = response.data;

    dispatch(getCurrentProfile());
    history.push("/user/dashboard");
  } catch (error) {
    dispatch({ type: DISPLAY_MESSAGE, payload: error.response.data.data });
    dispatch({ type: LOADING_FALSE });
  }
};

// add Education
export const addEducation = (data, id, history) => async (dispatch) => {
  try {
    dispatch({ type: LOADING_TRUE });
    await axios.post(`${BASE_URL}auth/education/${id}`, data);
    // const { message } = response.data;
    history.push("/user/dashboard");
    dispatch(getCurrentProfile());
  } catch (error) {
    dispatch({ type: DISPLAY_MESSAGE, payload: error.response.data.data });
    dispatch({ type: LOADING_FALSE });
  }
};

// delete Experience
export const deleteExperience = (id) => async (dispatch) => {
  try {
    dispatch({ type: LOADING_TRUE });
    const response = await axios.delete(`${BASE_URL}auth/experience/${id}`);
    // const { message } = response.data;
    console.log(response);
    dispatch(getCurrentProfile());
    dispatch({ type: LOADING_FALSE });
  } catch (error) {
    console.log(error.response);
    dispatch({ type: DISPLAY_MESSAGE, payload: error.response.data.message });
  }
};

// delete Education
export const deleteEducation = () => async (dispatch) => {
  try {
    dispatch({ type: LOADING_TRUE });
    await axios.delete(`${BASE_URL}/education`);
    // const { message } = response.data;
    dispatch(getCurrentProfile());
    dispatch({ type: LOADING_FALSE });
  } catch (error) {
    console.log(error.response);
    dispatch({ type: DISPLAY_MESSAGE, payload: error.response.data.message });
  }
};

//delete account and profile
export const deleteAccount = () => async (dispatch) => {
  try {
    dispatch({ type: LOADING_TRUE });
    if (window.confirm("If this is deleted, it cannot be undone.!")) {
      const response = await axios.delete(`${BASE_URL}auth/profile`);
      const { message } = response.data;

      localStorage.removeItem("token");
      window.location = "/";

      dispatch({ type: CURRENT_USER, payload: {} });
      dispatch({ type: LOADING_FALSE });
      dispatch({ type: DISPLAY_MESSAGE, payload: message });
    }
  } catch (error) {
    dispatch({ type: DISPLAY_MESSAGE, payload: error.response.data.message });
  }
};
