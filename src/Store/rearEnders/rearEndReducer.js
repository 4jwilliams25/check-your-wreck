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
  
  const initialState = [];
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case GET_REARENDS_PENDING:
        return state;
      case GET_REARENDS_SUCCESS:
        return action.payload;
      case GET_REARENDS_FAILED:
        return action.payload;
      case ADD_REAREND_PENDING:
        return state;
      case ADD_REAREND_SUCCESS:
        return [action.payload, ...state];
      case ADD_REAREND_FAILED:
        return action.payload;
      case REMOVE_REAREND_PENDING:
        return state;
      case REMOVE_REAREND_SUCCESS:
        return [...state.filter(loss => loss.id !== action.payload.id)];
      case REMOVE_REAREND_FAILED:
        return action.payload;
      case UPDATE_REAREND_PENDING:
        return state;
      case UPDATE_REAREND_SUCCESS:
        return state.map(loss =>
          loss.id === action.payload.id ? action.payload : loss
        );
      case UPDATE_REAREND_FAILED:
        return action.payload;
      default:
        return state;
    }
  };
  