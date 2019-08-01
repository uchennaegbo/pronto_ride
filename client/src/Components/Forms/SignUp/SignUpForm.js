import React from 'react';
import useForm from './useFormSignUp';
import validate from './validateSignUp';
import FormInput from '../Login/FormInput';
import { Link } from 'react-router-dom';
import GoBack from '../../GoBack/GoBack';

const SignUpForm = props => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submit,
    validate
  );

  function submit() {
    console.log('Submitted Successfully');
  }

  return (
    <div className="Form-section">
      <GoBack to="/home" text=" Back To Home" />
      <div className="Form-wrapper">
        <h2 className="Form-login">{props.FormTitle}</h2>
        <form onSubmit={handleSubmit} noValidate className="form">
          <FormInput
            for="name"
            FormText="Name"
            class={`${errors.name && 'inputError'}`}
            name="name"
            type="text"
            value={values.name}
            handleCallback={handleChange}
            autoComplete=""
            errorMessage={errors.name && <p className="error">{errors.name}</p>}
          />
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
          Gender
          <div class="form-check">
            <label class="form-check-label" for="gender-female">
              Female
            </label>
            <input
              class="form-check-input"
              type="radio"
              name="gender"
              id="gender-female"
              value="female"
            />
            <label class="form-check-label" for="gender-male">
              Male
            </label>
            <input
              class="form-check-input"
              type="radio"
              name="gender"
              id="gender-male"
              value="male"
            />
          </div>
          <FormInput
            for="newsletter"
            FormText="Do you agree to our terms of service."
            class="form-check" /*{`${errors.password && 'inputError'}`}*/
            name="newsletter"
            type="checkbox"
            value={values.password}
            handleCallback={handleChange}
            autoComplete=""
            display="flex"
            inputWidth="20px"
            labelWidth="fit-content"
            errorMessage={
              errors.password && <p className="error">{errors.password}</p>
            }
          />
          <button type="submit">Submit</button>
          <span className="formMessage">
            {props.formMessage}{' '}
            <Link to={props.formLink}>{props.formAnchor}</Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
