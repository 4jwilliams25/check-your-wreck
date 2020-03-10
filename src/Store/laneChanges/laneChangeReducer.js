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
  
  const initialState = [];
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case GET_LANECHANGES_PENDING:
        return state;
      case GET_LANECHANGES_SUCCESS:
        return action.payload;
      case GET_LANECHANGES_FAILED:
        return action.payload;
      case ADD_LANECHANGE_PENDING:
        return state;
      case ADD_LANECHANGE_SUCCESS:
        return [...state, action.payload];
      case ADD_LANECHANGE_FAILED:
        return action.payload;
      case REMOVE_LANECHANGE_PENDING:
        return state;
      case REMOVE_LANECHANGE_SUCCESS:
        return [...state.filter(loss => loss.id !== action.payload.id)];
      case REMOVE_LANECHANGE_FAILED:
        return action.payload;
      case UPDATE_LANECHANGE_PENDING:
        return state;
      case UPDATE_LANECHANGE_SUCCESS:
        return state.map(loss =>
          loss.id === action.payload.id ? action.payload : loss
        );
      case UPDATE_LANECHANGE_FAILED:
        return action.payload;
      default:
        return state;
    }
  };
  