import {
    CHANGE_SERVICE_CLEAR,
    SAVE_EDITED_SERVICE_ITEM_REQUEST,
    SAVE_EDITED_SERVICE_ITEM_FAILURE,
    SAVE_EDITED_SERVICE_ITEM_SUCCESS,
  } from '../actions/actionTypes'
  
  const initialState = {
    loading: false,
    error: null,
    saved: false,
  };
  
  export default function serviceSaveItemEdited(state = initialState, action) {
    switch (action.type) {
      case SAVE_EDITED_SERVICE_ITEM_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case SAVE_EDITED_SERVICE_ITEM_FAILURE:
        const {error} = action.payload;
        return {
          ...state,
          loading: false,
          error,
        };
      case SAVE_EDITED_SERVICE_ITEM_SUCCESS:
        return {
          ...initialState,
          saved: true,
        };
      case CHANGE_SERVICE_CLEAR:
          return {
            ...initialState,
          saved: false,
          };  
      default:
        return {
          ...state,
        }
    }
  }
  