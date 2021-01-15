import {
  CHANGE_SERVICE_FIELD,
  FETCH_SERVICES_REQUEST,
  FETCH_SERVICES_FAILURE,
  FETCH_SERVICES_SUCCESS,
  FETCH_SERVICE_ITEM_REQUEST,
  FETCH_SERVICE_ITEM_FAILURE,
  FETCH_SERVICE_ITEM_SUCCESS,
  REMOVE_SERVICE_REQUEST,
  REMOVE_SERVICE_FAILURE,
  REMOVE_SERVICE_SUCCESS,
  ADD_SERVICE_REQUEST,
  ADD_SERVICE_FAILURE,
  ADD_SERVICE_SUCCESS,
  SAVE_EDITED_SERVICE_ITEM_REQUEST,
  SAVE_EDITED_SERVICE_ITEM_FAILURE,
  SAVE_EDITED_SERVICE_ITEM_SUCCESS,
  CHANGE_SERVICE_EDIT_FIELD,
  CHANGE_SERVICE_CLEAR
} from './actionTypes';


export const saveEditedServiceItemRequest = () => ({
  type: SAVE_EDITED_SERVICE_ITEM_REQUEST,
});

export const saveEditedServiceItemFailure = error => ({
  type: SAVE_EDITED_SERVICE_ITEM_FAILURE,
  payload: {
    error,
  },
});

export const saveEditedServiceItemSuccess = item => ({
  type: SAVE_EDITED_SERVICE_ITEM_SUCCESS,
  payload: {
    item,
  },
});



export const changeServiceClear = item => ({
  type: CHANGE_SERVICE_CLEAR,
  payload: {
    
  },
});




export const fetchServiceItemRequest = () => ({
  type: FETCH_SERVICE_ITEM_REQUEST,
});

export const fetchServiceItemFailure = error => ({
  type: FETCH_SERVICE_ITEM_FAILURE,
  payload: {
    error,
  },
});

export const fetchServiceItemSuccess = item => ({
  type: FETCH_SERVICE_ITEM_SUCCESS,
  payload: {
    item,
  },
});


export const fetchServicesRequest = () => ({
  type: FETCH_SERVICES_REQUEST,
});

export const fetchServicesFailure = error => ({
  type: FETCH_SERVICES_FAILURE,
  payload: {
    error,
  },
});

export const fetchServicesSuccess = items => ({
  type: FETCH_SERVICES_SUCCESS,
  payload: {
    items,
  },
});

export const addServiceRequest = (name, price) => ({
  type: ADD_SERVICE_REQUEST,
  payload: {
    name,
    price,
  },
})

export const addServiceFailure = error => ({
  type: ADD_SERVICE_FAILURE,
  payload: {
    error,
  },
});

export const addServiceSuccess = () => ({
  type: ADD_SERVICE_SUCCESS,
});

export const changeServiceField = (name, value) => ({
  type: CHANGE_SERVICE_FIELD,
  payload: {
    name,
    value,
  },
});

export const changeServiceEditField = (name, value) => (
  {
  type: CHANGE_SERVICE_EDIT_FIELD,
  payload: {
    name,
    value,
  },
});


export const removeServiceRequest = (id) => ({
  type: REMOVE_SERVICE_REQUEST,
  payload: {
    id,
  },
})

export const removeServiceFailure = error => ({
  type: REMOVE_SERVICE_FAILURE,
  payload: {
    error,
  },
});

export const removeServiceSuccess = () => ({
  type: REMOVE_SERVICE_SUCCESS,
});








export const fetchServices = async (dispatch) => {
  dispatch(fetchServicesRequest());
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}`)
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    dispatch(fetchServicesSuccess(data));
  } catch (e) {
    dispatch(fetchServicesFailure(e.message));
  }
}


export const fetchServiceItem = (id) => async (dispatch) => {
  dispatch(fetchServiceItemRequest());
  
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/${id}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    dispatch(fetchServiceItemSuccess(data));
  } catch (e) {
    dispatch(fetchServiceItemFailure(e.message));
  }
}




export const addService = (name, price) => async (dispatch) => {
  dispatch(addServiceRequest());

  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, price }),
    })
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    dispatch(addServiceSuccess());
  } catch (e) {
    dispatch(addServiceFailure(e.message));
  }
  dispatch(fetchServices());
}

export const saveEditedServiceItem = (item) => async (dispatch) => {
  dispatch(saveEditedServiceItemRequest());

  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item),
    })
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    dispatch(saveEditedServiceItemSuccess());
  } catch (e) {
    dispatch(saveEditedServiceItemFailure(e.message));
  }
  dispatch(fetchServices());
}


export const removeService = (id) => async (dispatch) => {
  dispatch(removeServiceRequest());
  
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    })
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    dispatch(removeServiceSuccess());
  } catch (e) {
    dispatch(removeServiceFailure(e.message));
  }
  dispatch(fetchServices());
}