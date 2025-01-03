import {
  ADD_POST_FAILURE,
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
  DELETE_POST_FAILURE,
  DELETE_POST_REQUEST,
  DELETE_POST_SUCCESS,
  LIKE_POST_FAILURE,
  LIKE_POST_REQUEST,
  LIKE_POST_SUCCESS,
  GET_POSTS_FAILURE,
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  UPDATE_POST_FAILURE,
  UPDATE_POST_REQUEST,
  UPDATE_POST_SUCCESS,
} from "./post.actionType";
import axios from "axios";
function addPost(formData) {
  return async function (dispatch) {
    dispatch({ type: ADD_POST_REQUEST });
    try {
      const jwtToken = localStorage.getItem("jwt");
      const response = await axios.post(
        "http://localhost:8084/api/addPostInfo",
        formData,
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
            "Content-Type": "application/json",
          },
        }
      );
      const data = response.data;
      dispatch({ type: ADD_POST_SUCCESS, payload: data.message });
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Unable to Add";
      dispatch({ type: ADD_POST_FAILURE, payload: errorMessage });
    }
  };
}

function updatePost(PostId, formData) {
  return async function (dispatch) {
    dispatch({ type: UPDATE_POST_REQUEST });

    try {
      const jwtToken = localStorage.getItem("jwt");
      const response = await axios.put(
        `http://localhost:8084/api/editPost/${PostId}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
            "Content-Type": "application/json",
          },
        }
      );
      const data = response.data;
      dispatch({ type: UPDATE_POST_SUCCESS, payload: data.message });
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Unable to Update";
      dispatch({ type: UPDATE_POST_FAILURE, payload: errorMessage });
    }
  };
}

function deletePost(PostId) {
  return async function (dispatch) {
    dispatch({ type: DELETE_POST_REQUEST });
    try {
      const jwtToken = localStorage.getItem("jwt");
      const response = await axios.delete(
        `http://localhost:8084/api/removePost/${PostId}`,
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
            "Content-Type": "application/json",
          },
        }
      );
      const data = response.data;
      dispatch({ type: DELETE_POST_SUCCESS, payload: data.message });
    } catch (error) {
      dispatch({ type: DELETE_POST_FAILURE, payload: error.message });
    }
  };
}
function likePost(postId) {
  return async function (dispatch) {
    dispatch({ type: LIKE_POST_REQUEST });
    try {
      const jwtToken = localStorage.getItem("jwt");
      const response = await axios.put(
        `http://localhost:8084/api/likePost/${postId}`,
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
            "Content-Type": "application/json",
          },
        }
      );
      const data = response.data;
      dispatch({ type: LIKE_POST_SUCCESS, payload: data.message });
    } catch (error) {
      dispatch({ type: LIKE_POST_FAILURE, payload: error.message });
    }
  };
}
function getAllPosts() {
  return async function (dispatch) {
    dispatch({ type: GET_POSTS_REQUEST });
    try {
      const jwtToken = localStorage.getItem("jwt");
      const response = await axios.get(
        `http://localhost:8084/api/getAllPosts`,
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
            "Content-Type": "application/json",
          },
        }
      );
      const data = response.data;
      dispatch({ type: GET_POSTS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: GET_POSTS_FAILURE, payload: error.message });
    }
  };
}
export { addPost, updatePost, deletePost, likePost, getAllPosts };
