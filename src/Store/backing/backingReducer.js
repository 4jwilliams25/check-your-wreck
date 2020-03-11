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
  
  const initialState = [];
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case GET_BACKINGS_PENDING:
        return state;
      case GET_BACKINGS_SUCCESS:
        return action.payload;
      case GET_BACKINGS_FAILED:
        return action.payload;
      case ADD_BACKING_PENDING:
        return state;
      case ADD_BACKING_SUCCESS:
        return [...state, action.payload];
      case ADD_BACKING_FAILED:
        return action.payload;
      case REMOVE_BACKING_PENDING:
        return state;
      case REMOVE_BACKING_SUCCESS:
        return [...state.filter(loss => loss.id !== action.payload.id)];
      case REMOVE_BACKING_FAILED:
        return action.payload;
      case UPDATE_BACKING_PENDING:
        return state;
      case UPDATE_BACKING_SUCCESS:
        return state.map(loss =>
          loss.id === action.payload.id ? action.payload : loss
        );
      case UPDATE_BACKING_FAILED:
        return action.payload;
      default:
        return state;
    }
  };
  