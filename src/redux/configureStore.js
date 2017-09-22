import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import contact from './modules/contact';
import modal from './modules/modal';

let middleware = [thunk];

const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);

const reducer = combineReducers({
  contact,
  modal,
  form: formReducer
});

const configureStore = (initialState) => createStoreWithMiddleware(reducer, initialState);

export default configureStore;
