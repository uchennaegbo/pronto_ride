import React from 'react';
import './TextContent.css';
import SearchForm from '../SearchForm/SearchForm';

const TextContent = props => {
  return (
    <div className="text-container">
      <h1 className="title">
        <strong>{props.h1text}</strong>
      </h1>
      <p className="tagline">{props.ptext}</p>

      <SearchForm />
    </div>
  );
};

export default TextContent;
