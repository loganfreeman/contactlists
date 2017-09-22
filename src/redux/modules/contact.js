import getSortedObjectArray from '../../utils/objectArraySort';

import {
  OPEN_MODAL,
  CLOSE_MODAL,
  LOAD,
  ADD_CONTACT,
  EDIT_CONTACT,
  DELETE_CONTACT,
  SORT_CONTACT,
  GET_CONTACTS_SUCCESS
} from './types';

// Initial State
export const initialState = {
  contactLists: [],
  perPage: 10,
  currentPage: 1
};

// Reducers
export default function reducer(state = initialState, action){
  const { contactLists } = action;
  switch (action.type){
  case GET_CONTACTS_SUCCESS:
    return {
      ...state,
      contactLists
    };

  case ADD_CONTACT:
    return Object.assign(
      {},
      state,
      {
        contactLists: [...state.contactLists, action.contact]
      }
    );
  case EDIT_CONTACT:
    return Object.assign(
      {},
      state,
      {
        contactLists: [
          ...state.contactLists.slice(0, action.index),
          Object.assign({}, state.contactLists[action.index], action.contact),
          ...state.contactLists.slice(action.index + 1)
        ]
      }
    );
  case DELETE_CONTACT:
    return Object.assign(
      {},
      state,
      {
        contactLists: [
          ...state.contactLists.slice(0, action.index),
          ...state.contactLists.slice(action.index + 1)
        ]
      }
    );
  case SORT_CONTACT:
    return Object.assign(
      {},
      state,
      {
        contactLists: getSortedObjectArray(state.contactLists, action.fieldName, 'asc')
      }
    );
  default:
    return state;
  }
}
