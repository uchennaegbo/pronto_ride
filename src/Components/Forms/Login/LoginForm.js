import React from 'react';
import useForm from './useForm';
import validate from './validateLogin';
import FormInput from './FormInput';
import './Form.css';

const Form = props => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submit,
    validate
  );

  function submit() {
    console.log('Submitted Succesfully');
  }

  return (
    <div className="Form-section">
      <div className="Form-wrapper">
        <h2 className="Form-login">{props.FormTitle}</h2>
        <form onSubmit={handleSubmit} noValidate className="form">
          <FormInput
            for="email"
            FormText="Email"
            class={`${errors.email && 'inputError'}`}
            name="email"
            type="email"
            value={values.email}
            handleCallback={handleChange}
            autoComplete=""
            errorMessage={
              errors.email && <p className="error">{errors.email}</p>
            }
          />

          <FormInput
            for="password"
            FormText="Password"
            class={`${errors.password && 'inputError'}`}
            name="password"
            type="password"
            value={values.password}
            handleCallback={handleChange}
            autoComplete=""
            errorMessage={
              errors.password && <p className="error">{errors.password}</p>
            }
          />
          <button type="submit">Submit</button>
          <span className="formMessage">{props.formMessage}</span>
        </form>
      </div>
    </div>
  );
};

export default Form;
