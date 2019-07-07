import React from 'react';

const FormInput = props => {
  return (
    <>
      <label htmlFor={props.for}>{props.FormText}</label>
      <input
        className={props.class}
        name={props.name}
        type={props.type}
        value={props.defaultValue}
        onChange={props.handleCallback}
        autoComplete={props.autoComplete}
      />
      {props.errorMessage}
    </>
  );
};

export default FormInput;
