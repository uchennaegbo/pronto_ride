import React from 'react';

const FormInput = props => {
  return (
    <div className="formCheck" style={{ display: props.display }}>
      <label htmlFor={props.for} style={{ width: props.labelWidth }}>
        {props.FormText}
      </label>
      <input
        className={props.class}
        name={props.name}
        type={props.type}
        value={props.defaultValue}
        onChange={props.handleCallback}
        autoComplete={props.autoComplete}
        style={{ width: props.inputWidth }}
      />

      {props.errorMessage}
    </div>
  );
};

export default FormInput;
