import axios from "axios";
import {
  GET_BACKINGS_PENDING,
  GET_BACKINGS_SUCCESS,
  GET_BACKINGS_FAILED,
  ADD_BACKING_PENDING,
  ADD_BACKING_SUCCESS,
  ADD_BACKING_FAILED,
  REMOVE_BACKING_PENDING,
  REMOVE_BACKING_SUCCESS,
  REMOVE_BACKING_FAILED,
  UPDATE_BACKING_PENDING,
  UPDATE_BACKING_SUCCESS,
  UPDATE_BACKING_FAILED
} from "./backingConstants";

export const getBackings = () => dispatch => {
  dispatch({
    type: GET_BACKINGS_PENDING
  });
  axios
    .get("http://localhost:8080/backing")
    .then(res => {
      dispatch({
        type: GET_BACKINGS_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_BACKINGS_FAILED,
        payload: err
      });
    });
};

export const addBacking = newLoss => dispatch => {
  dispatch({
    type: ADD_BACKING_PENDING
  });
  axios
    .post("http://localhost:8080/backing", newLoss)
    .then(res => {
      dispatch({
        type: ADD_BACKING_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: ADD_BACKING_FAILED,
        payload: err
      });
    });
};

export const updateBacking = updatedLoss => dispatch => {
  dispatch({
    type: UPDATE_BACKING_PENDING
  });
  axios
    .patch(`http://localhost:8080/backing`, updatedLoss)
    .then(res => {
      dispatch({
        type: UPDATE_BACKING_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: UPDATE_BACKING_FAILED,
        payload: err
      });
    });
};

export const removeBacking = id => dispatch => {
    dispatch({
      type: REMOVE_BACKING_PENDING
    });
    axios
      .delete(`http://localhost:8080/backing/${id}`)
      .then(res => {
        dispatch({
          type: REMOVE_BACKING_SUCCESS,
          payload: res.data
        });
      })
      .catch(err => {
        dispatch({
          type: REMOVE_BACKING_FAILED,
          payload: err
        });
      });
  };
