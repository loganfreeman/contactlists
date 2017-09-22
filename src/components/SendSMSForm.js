import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
// const  { DOM: { input } } = React;


class SendSMSForm extends Component {

  render() {
    return (
      <form>
        <div>
          <label htmlFor="smsMessage">SMS Message</label>
          <Field name="smsMessage" component="input" type="textarea" />
        </div>
      </form>
    );
  }
}

// Decorate the form component
SendSMSForm = reduxForm({
  form: 'smsMessage'
})(SendSMSForm);

export default SendSMSForm;
