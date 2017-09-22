import React, { Component } from 'react';
import './App.css';
import ContactList from '../components/ContactList';
import ContactListModal from '../components/ContactListModal';
import ReactPaginate from 'react-paginate';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentPage: props.currentPage
    }
  }

  componentDidMount() {
    const { currentPage, perPage } = this.props;
    this.props.actions.getContacts(currentPage, perPage);
  }

  handlePageClick = (data) => {
    const { perPage } = this.props;
    const currentPage = data.selected + 1; // offset is zero

    this.setState({
      currentPage,
    });

    this.props.actions.getContacts(currentPage, perPage);
  };



  render() {
    const {
      contactLists,
      modalType,
      currentContactId,
      contact,
      sortField,
      showModal,
      smsMessage
    } = this.props;

    const {
      addContact,
      editContact,
      deleteContact,
      sortContact,
      closeModal,
      openModal,
      loadData,
      sendSMS
    } = this.props.actions;

    return (
      <div className="App">
        <ContactList
          contactLists={contactLists}
          currentContactId={currentContactId}
          openModal={openModal}
          loadData={loadData}
        />
        <ContactListModal
          contactLists={contactLists}
          modalType={modalType}
          showModal={showModal}
          currentContactId={currentContactId}
          contact={contact}
          sortField={sortField}
          closeModal={closeModal}
          addContact={addContact}
          editContact={editContact}
          deleteContact={deleteContact}
          sortContact={sortContact}
          sendSMS={sendSMS}
          smsMessage={smsMessage}
        />

        <ReactPaginate previousLabel={"previous"}
                             nextLabel={"next"}
                             breakLabel={<a href="">...</a>}
                             breakClassName={"break-me"}
                             pageCount={this.state.perPage}
                             marginPagesDisplayed={2}
                             pageRangeDisplayed={5}
                             onPageChange={this.handlePageClick.bind(this)}
                             containerClassName={"pagination"}
                             activeClassName={"active"} />
      </div>
    );
  }
}

export default App;
