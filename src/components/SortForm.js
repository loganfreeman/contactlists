import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
// const  { DOM: { input } } = React;


class SortForm extends Component {

  render() {
    return (
      <form>
        <div>
          <label>
            <Field
              name="sortField"
              component="input"
              type="radio"
              value="first_name"
            />
            {' First Name'}
          </label><br/>
          <label>
            <Field
              name="sortField"
              component="input"
              type="radio"
              value="last_name"
            />
            {' Last Name'}
          </label><br/>
          <label>
            <Field
              name="sortField"
              component="input"
              type="radio"
              value="phone_mobile_national"
            />
            {' Phone Number'}
          </label><br/>
          <label>
            <Field
              name="sortField"
              component="input"
              type="radio"
              value="street_address"
            />
            {' Address'}
          </label><br/>
          <label>
            <Field
              name="sortField"
              component="input"
              type="radio"
              value="email"
            />
            {' Email'}
          </label><br/>
        </div>
      </form>
    );
  }
}

// Decorate the form component
SortForm = reduxForm({
  form: 'sortField'
})(SortForm);

export default SortForm;
