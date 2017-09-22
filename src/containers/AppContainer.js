import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as contactActions from '../redux/modules/actions';


import App from '../components/App';

function mapStateToProps(state) {
  return {
    contactLists: state.contact.contactLists,
    modalType: state.modal.modalType,
    showModal: state.modal.showModal,
    currentContactId: state.modal.currentContactId,
    contact: state.form.contact,
    sortField: state.form.sortField,
    currentPage: state.contact.currentPage,
    perPage: state.contact.perPage,
    smsMessage: state.form.smsMessage
  }
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(contactActions, dispatch)
	};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
