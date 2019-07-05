import React from 'react';
import './SearchInputs.css';

const SearchInputs = props => {
  return (
    <div className="flex-row flex-gutter">
      <div className="flex-cell">
        <div className="input-icon-group input-icon-group--left">
          <label className="form-label hide">Search</label>
          <input
            type={props.type}
            title={props.title}
            size={props.size}
            name={props.name}
            placeholder={props.placeholder}
          />
          {props.icon}
        </div>
      </div>
    </div>
  );
};

export default SearchInputs;
