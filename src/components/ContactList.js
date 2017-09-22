import React, { Component } from 'react';
import './ContactList.css';

class ContactList extends Component {
  onAddHandler = () => {
    this.props.openModal('add');
    this.props.loadData({});
  }

  onEditHandler = (index) => {
    this.props.openModal('edit', index);
    const currentContact = this.props.contactLists[index];
    this.props.loadData(currentContact);
  }

  onDeleteHandler = (index) => {
    this.props.openModal('delete', index);
  }

  onSortHandler = () => {
    this.props.openModal('sort');
  }

  onSendSMSHandler = (index) => {
    this.props.openModal('sendSMS', index);
  }

  render() {
    const { contactLists, openModal } = this.props;
    const {
      onAddHandler,
      onEditHandler,
      onDeleteHandler,
      onSortHandler,
      onSendSMSHandler
    } = this;


    return (
      <div className="ContactListWrap">
        <table className="ContactList">
          <thead className="ContactListHead">
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Phone Number</th>
              <th>Address</th>
              <th>Email</th>
              <th>
                <button type="button" onClick={onAddHandler}>Add</button>
              </th>
              <th>
                <button type="button" onClick={onSortHandler}>Sort</button>
              </th>
            </tr>
          </thead>
          <tbody className="ContactListBody">
            {contactLists.map((contact, index) =>
              <tr className="" key={`contact-${index}`}>
                <td>{contact.first_name}</td>
                <td>{contact.last_name}</td>
                <td>{contact.phone_mobile_national}</td>
                <td>{contact.street_address}</td>
                <td>{contact.email}</td>
                <td><button type="button" onClick={() => { onEditHandler(index)}}>Edit</button></td>
                <td><button type="button" onClick={() => {onDeleteHandler(index)}}>Delete</button></td>
                <td><button type="button" onClick={() => {onSendSMSHandler(index)}}>Send SMS</button></td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ContactList;
