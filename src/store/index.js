import { createStore, combineReducers } from "redux";
import serviceListReducer from '../reducers/serviceList';
import serviceItemReducer from '../reducers/serviceItem';
import serviceAddReducer from '../reducers/serviceAdd';
import serviceSaveItemEditedReducer from '../reducers/serviceSaveItemEdited';
import serviceRemoveReducer from '../reducers/serviceRemove';
import thunk from "redux-thunk";

const reducer = combineReducers({
  serviceList: serviceListReducer,
  serviceAdd: serviceAddReducer,
  serviceRemove: serviceRemoveReducer,
  serviceItem: serviceItemReducer,
  serviceSaveItemEdited: serviceSaveItemEditedReducer,
});


  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(reducer, composeEnhancers(
    applyMiddleware(thunk)),
  );

export default store;
