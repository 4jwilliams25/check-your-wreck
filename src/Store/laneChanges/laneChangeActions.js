import axios from "axios";
import {
  GET_LANECHANGES_PENDING,
  GET_LANECHANGES_SUCCESS,
  GET_LANECHANGES_FAILED,
  ADD_LANECHANGE_PENDING,
  ADD_LANECHANGE_SUCCESS,
  ADD_LANECHANGE_FAILED,
  REMOVE_LANECHANGE_PENDING,
  REMOVE_LANECHANGE_SUCCESS,
  REMOVE_LANECHANGE_FAILED,
  UPDATE_LANECHANGE_PENDING,
  UPDATE_LANECHANGE_SUCCESS,
  UPDATE_LANECHANGE_FAILED
} from "./laneChangeConstants";

export const getLaneChanges = () => dispatch => {
  dispatch({
    type: GET_LANECHANGES_PENDING
  });
  axios
    .get("http://localhost:8080/lanechange")
    .then(res => {
      dispatch({
        type: GET_LANECHANGES_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_LANECHANGES_FAILED,
        payload: err
      });
    });
};

export const addLaneChange = newLoss => dispatch => {
  dispatch({
    type: ADD_LANECHANGE_PENDING
  });
  axios
    .post("http://localhost:8080/lanechange", newLoss)
    .then(res => {
      dispatch({
        type: ADD_LANECHANGE_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: ADD_LANECHANGE_FAILED,
        payload: err
      });
    });
};

export const updateLaneChange = updatedLoss => dispatch => {
  dispatch({
    type: UPDATE_LANECHANGE_PENDING
  });
  axios
    .patch(`http://localhost:8080/lanechange`, updatedLoss)
    .then(res => {
      dispatch({
        type: UPDATE_LANECHANGE_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: UPDATE_LANECHANGE_FAILED,
        payload: err
      });
    });
};

export const removeLaneChange = id => dispatch => {
    dispatch({
      type: REMOVE_LANECHANGE_PENDING
    });
    axios
      .delete(`http://localhost:8080/lanechange/${id}`)
      .then(res => {
        dispatch({
          type: REMOVE_LANECHANGE_SUCCESS,
          payload: res.data
        });
      })
      .catch(err => {
        dispatch({
          type: REMOVE_LANECHANGE_FAILED,
          payload: err
        });
      });
  };
