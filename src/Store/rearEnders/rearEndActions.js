import axios from "axios";
import {
  GET_REARENDS_PENDING,
  GET_REARENDS_SUCCESS,
  GET_REARENDS_FAILED,
  ADD_REAREND_PENDING,
  ADD_REAREND_SUCCESS,
  ADD_REAREND_FAILED,
  REMOVE_REAREND_PENDING,
  REMOVE_REAREND_SUCCESS,
  REMOVE_REAREND_FAILED,
  UPDATE_REAREND_PENDING,
  UPDATE_REAREND_SUCCESS,
  UPDATE_REAREND_FAILED
} from "./rearEndConstants";

export const getRearEnds = () => dispatch => {
  dispatch({
    type: GET_REARENDS_PENDING
  });
  axios
    .get("http://localhost:8080/rearend")
    .then(res => {
      dispatch({
        type: GET_REARENDS_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_REARENDS_FAILED,
        payload: err
      });
    });
};

export const addRearEnd = newLoss => dispatch => {
  dispatch({
    type: ADD_REAREND_PENDING
  });
  axios
    .post("http://localhost:8080/rearend", newLoss)
    .then(res => {
      dispatch({
        type: ADD_REAREND_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: ADD_REAREND_FAILED,
        payload: err
      });
    });
};

export const updateRearEnd = updatedLoss => dispatch => {
  dispatch({
    type: UPDATE_REAREND_PENDING
  });
  axios
    .patch(`http://localhost:8080/rearend`, updatedLoss)
    .then(res => {
      dispatch({
        type: UPDATE_REAREND_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: UPDATE_REAREND_FAILED,
        payload: err
      });
    });
};

export const removeRearEnd = id => dispatch => {
    dispatch({
      type: REMOVE_REAREND_PENDING
    });
    axios
      .delete(`http://localhost:8080/rearend/${id}`)
      .then(res => {
        dispatch({
          type: REMOVE_REAREND_SUCCESS,
          payload: res.data
        });
      })
      .catch(err => {
        dispatch({
          type: REMOVE_REAREND_FAILED,
          payload: err
        });
      });
  };
