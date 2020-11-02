import axios from "axios";
import { BASE_URL } from "../../url";
import { DISPLAY_MESSAGE } from "../types/messageType";
import post from "../reducers/post";
import { LOADING_TRUE, LOADING_FALSE } from "../types/loadingType";
import { ADD_POST, GET_POST, GET_POSTS, DELETE_POST } from "../types/postTypes";

export const createPost = (data) => async (dispatch) => {
  try {
    dispatch({ type: LOADING_TRUE });
    const response = await axios.post(`${BASE_URL}posts`, data);
    const { message } = response.data;

    dispatch({ type: ADD_POST, payload: post });
    dispatch({ type: LOADING_FALSE });
    dispatch({ type: DISPLAY_MESSAGE, payload: message });
  } catch (error) {
    dispatch({ type: DISPLAY_MESSAGE, payload: {} });
    dispatch({ type: LOADING_FALSE });
  }
};

// This is for the SinglePost for comment
export const getPost = (id) => async (dispatch) => {
  try {
    dispatch({ type: LOADING_TRUE });
    const response = await axios.get(`${BASE_URL}posts/${id}`);
    const { message, post } = response.data;

    dispatch({ type: GET_POST, payload: post });
    dispatch({ type: LOADING_FALSE });
    dispatch({ type: DISPLAY_MESSAGE, payload: message });
  } catch (error) {
    dispatch({ type: DISPLAY_MESSAGE, payload: null });
    dispatch({ type: LOADING_FALSE });
  }
};

// Gets all post
export const getPosts = () => async (dispatch) => {
  try {
    dispatch({ type: LOADING_TRUE });
    const response = await axios.get(`${BASE_URL}posts`);
    const { message, post } = response.data;

    dispatch({ type: GET_POSTS, payload: post });
    dispatch({ type: LOADING_FALSE });
    dispatch({ type: DISPLAY_MESSAGE, payload: message });
  } catch (error) {
    dispatch({ type: DISPLAY_MESSAGE, payload: {} });
    dispatch({ type: LOADING_FALSE });
  }
};

//Like post
export const likePost = (id) => async (dispatch) => {
  try {
    dispatch({ type: LOADING_TRUE });
    const response = await axios.post(`${BASE_URL}like/${id}`);
    const { message } = response.data;
    dispatch(getPosts());
    dispatch({ type: LOADING_FALSE });
    dispatch({ type: DISPLAY_MESSAGE, payload: message });
  } catch (error) {
    dispatch({
      type: DISPLAY_MESSAGE,
      payload: error.response.data,
    });
  }
};

//Unlike post
export const unlikePost = (id) => async (dispatch) => {
  try {
    dispatch({ type: LOADING_TRUE });
    const response = await axios.post(`${BASE_URL}unlike/${id}`);
    const { message } = response.data;
    dispatch(getPosts());
    dispatch({ type: LOADING_FALSE });
    dispatch({ type: DISPLAY_MESSAGE, payload: message });
  } catch (error) {
    dispatch({
      type: DISPLAY_MESSAGE,
      payload: error.response.data,
    });
  }
};

// add comment to post
export const addComment = (id, data) => async (dispatch) => {
  try {
    dispatch({ type: LOADING_TRUE })
    const response = await axios.post(`${BASE_URL}comment/${id}`, data)
    const {message} = response.data;

    dispatch({ type: LOADING_FALSE })
    dispatch({ type: GET_POST, payload: message })
  } catch (error) {
    dispatch({ type: DISPLAY_MESSAGE, payload: error.response.data })
  }
}

// Delete post
export const deletePost = (id) => async (dispatch) => {
  try {
    dispatch({ type: LOADING_TRUE });
    const response = await axios.delete(`${BASE_URL}posts/${id}`);
    const { message } = response.data;

    dispatch({ type: DELETE_POST, payload: id });
    dispatch({ type: LOADING_FALSE });
    dispatch({ type: DISPLAY_MESSAGE, payload: message });
  } catch (error) {
    dispatch({ type: DISPLAY_MESSAGE, payload: error.response.data });
  }
};
