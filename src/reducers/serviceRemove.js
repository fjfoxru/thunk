import {
    REMOVE_SERVICE_REQUEST,
    REMOVE_SERVICE_FAILURE,
    REMOVE_SERVICE_SUCCESS,
  } from '../actions/actionTypes'
  
  const initialState = {
    item: { id: '' },
    loading: false,
    error: null,
  };
  
  export default function serviceRemoveReducer(state = initialState, action) {
    switch (action.type) {
      case REMOVE_SERVICE_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case REMOVE_SERVICE_FAILURE:
        const {error} = action.payload;
        return {
          ...state,
          loading: false,
          error,
        };
      case REMOVE_SERVICE_SUCCESS:
        return {...initialState};
      default:
        return state;
    }
  }
  