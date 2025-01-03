import axios from "axios";
import {
  ADD_EVENT_FAILURE,
  ADD_EVENT_REQUEST,
  ADD_EVENT_SUCCESS,
  ADD_FEEDBACK_FAILURE,
  ADD_FEEDBACK_REQUEST,
  ADD_FEEDBACK_SUCCESS,
  DELETE_EVENT_FAILURE,
  DELETE_EVENT_REQUEST,
  DELETE_EVENT_SUCCESS,
  GET_EVENTS_FAILURE,
  GET_EVENTS_REQUEST,
  GET_EVENTS_SUCCESS,
  UPDATE_EVENT_FAILURE,
  UPDATE_EVENT_REQUEST,
  UPDATE_EVENT_SUCCESS,
} from "./event.actionType";

function addEvent(formData) {
  return async function (dispatch) {
    dispatch({ type: ADD_EVENT_REQUEST });
    try {
      const jwtToken = localStorage.getItem("jwt");
      const response = await axios.post(
        "http://localhost:8084/api/addEventInfo",
        formData,
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
            "Content-Type": "application/json",
          },
        }
      );
      const data = response.data;
      dispatch({ type: ADD_EVENT_SUCCESS, payload: data.message });
    } catch (error) {
      console.log("Error in adding event", error);
      const errorMessage = error.response?.data?.message || "Unable to Add";
      dispatch({ type: ADD_EVENT_FAILURE, payload: errorMessage });
    }
  };
}

function updateEvent(eventId, formData) {
  return async function (dispatch) {
    dispatch({ type: UPDATE_EVENT_REQUEST });

    try {
      const jwtToken = localStorage.getItem("jwt");
      const response = await axios.put(
        `http://localhost:8084/api/editEvent/${eventId}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
            "Content-Type": "application/json",
          },
        }
      );

      const data = response.data;
      dispatch({ type: UPDATE_EVENT_SUCCESS, payload: data.message });
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Unable to Update";
      dispatch({ type: UPDATE_EVENT_FAILURE, payload: errorMessage });
    }
  };
}

function deleteEvent(eventId) {
  return async function (dispatch) {
    dispatch({ type: DELETE_EVENT_REQUEST });
    try {
      const jwtToken = localStorage.getItem("jwt");
      const response = await axios.delete(
        `http://localhost:8084/api/removeEvent/${eventId}`,
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
            "Content-Type": "application/json",
          },
        }
      );
      const data = response.data;
      dispatch({ type: DELETE_EVENT_SUCCESS, payload: data.message });
    } catch (error) {
      dispatch({ type: DELETE_EVENT_FAILURE, payload: error.message });
    }
  };
}

function addFeedback(content, eventId) {
  return async function (dispatch) {
    dispatch({ type: ADD_FEEDBACK_REQUEST });
    try {
      const jwtToken = localStorage.getItem("jwt");
      const response = await axios.post(
        `http://localhost:8084/api/submitFeedback/${eventId}`,
        content,
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
            "Content-Type": "application/json",
          },
        }
      );
      dispatch({ type: ADD_FEEDBACK_SUCCESS, payload: response.data.message });
    } catch (error) {
      dispatch({ type: ADD_FEEDBACK_FAILURE, payload: error.message });
    }
  };
}
function getAllEvents() {
  return async function (dispatch) {
    dispatch({ type: GET_EVENTS_REQUEST });
    try {
      const jwtToken = localStorage.getItem("jwt");
      const response = await axios.get(
        `http://localhost:8084/api/getAllEvents`,
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
            "Content-Type": "application/json",
          },
        }
      );
      const data = response.data;
      dispatch({ type: GET_EVENTS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: GET_EVENTS_FAILURE, payload: error.message });
    }
  };
}
export { addEvent, updateEvent, deleteEvent, addFeedback, getAllEvents };
