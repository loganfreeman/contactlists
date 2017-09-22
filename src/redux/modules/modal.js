//Actions
import {
  OPEN_MODAL,
  CLOSE_MODAL,
  LOAD
} from './types';

// Initial State
export const initialState = {
  modalType: 'add',
  showModal: false,
  currentContactId: 0,
  data: {}
};


// Reducers
export default function reducer(state = initialState, action) {
  switch (action.type){

  case OPEN_MODAL:
    return Object.assign(
      {},
      state,
      {
        modalType: action.modalType,
        showModal: true,
        currentContactId: action.currentContactId
      }
    );

  case CLOSE_MODAL:
    return Object.assign(
      {},
      state,
      {
        showModal: false,
        currentContactId: 0
      }
    );

  case LOAD:
    return Object.assign(
      {},
      state,
      {
        data: action.data
      }
    )

  default:
    return state;
  }
};
