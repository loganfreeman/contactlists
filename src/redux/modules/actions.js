import {
  OPEN_MODAL,
  CLOSE_MODAL,
  LOAD,
  ADD_CONTACT,
  EDIT_CONTACT,
  DELETE_CONTACT,
  SORT_CONTACT,
  GET_CONTACTS_SUCCESS,
  SEND_SMS_SUCCESS
} from './types';

import dummyContacts from '../../../dummy_contact.json';
import Promise from 'bluebird';
import * as api from './helper';

export function sendSMSSuccess() {
  return {
    type: SEND_SMS_SUCCESS
  }
}

export function sendSMS(contact, message) {
  const smsMessage = {
    "recipients": [
      `contact-${contact.id}`
    ],
    "message": {
      "body": message.smsMessage
    }
  };
  return function (dispatch) {
    return api.sendSMS(smsMessage).then(() => {
      dispatch(sendSMSSuccess());
    })
  }
}

//Action Creators
export function getContactsSuccess(contactLists) {
  return {
    type: GET_CONTACTS_SUCCESS,
    contactLists
  }
}

export function getContacts(page = 1, per = 100) {
  return function (dispatch) {
    return api.getContacts(page, per).then(contactLists => {
      dispatch(getContactsSuccess(contactLists));
    })
  }
}

export function openModalSuccess(modalType, currentContactId) {
  return {
    type: OPEN_MODAL,
    modalType,
    currentContactId
  }
};

export function closeModalSuccess(){
  return {
    type: CLOSE_MODAL
  }
};

export function loadDataSuccess(data) {
  return {
    type: LOAD,
    data
  }
}

// Actions
export function openModal(modalType, currentContactId) {
  return function (dispatch) {
    dispatch(openModalSuccess(modalType, currentContactId))
  }
};

export function closeModal(){
  return function (dispatch) {
    dispatch(closeModalSuccess());
  }
};

export function loadData(data) {
  return function (dispatch) {
    dispatch(loadDataSuccess(data));
  }
}


//Action Creators
export function addContactSuccess(contact) {
  return {
    type: ADD_CONTACT,
    contact
  }
};

export function editContactSuccess(index, contact) {
  return {
    type: EDIT_CONTACT,
    index,
    contact
  }
};

export function deleteContactSuccess(index) {
  return {
    type: DELETE_CONTACT,
    index
  }
};

export function sortContactSuccess(fieldName) {
  return {
    type: SORT_CONTACT,
    fieldName
  }
}

//Actions
export function addContact(contact) {
  return function (dispatch) {
    dispatch(addContactSuccess(contact));
  }
};

export function editContact(index, contact) {
  return function (dispatch) {
    dispatch(editContactSuccess(index, contact))
  }
};

export function deleteContact(index) {
  return function (dispatch) {
    dispatch(deleteContactSuccess(index));
  }
};

export function sortContact(fieldName) {
  return function (dispatch) {
    dispatch(sortContactSuccess(fieldName));
  }
}
