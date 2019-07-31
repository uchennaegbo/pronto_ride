import React from 'react';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './GoBack.css';

const GoBack = props => {
  return (
    <div className="adjust">
      <Link to={props.to}>
        <button className="btn btn-balanced">
          <FaLongArrowAltLeft className="arrow" />
          {props.text}
        </button>
      </Link>
    </div>
  );
};

export default GoBack;
