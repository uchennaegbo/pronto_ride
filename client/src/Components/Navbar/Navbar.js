import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import Pronto from '../../assets/Pronto.svg';

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="nav-icon-container">
        <FaBars className="nav-icon" />
      </div>
      <div className="logo-icon-container">
        <img src={Pronto} alt="pronto-logo" className="logo-icon" />
        <Link to="/home">
          <strong>Pronto</strong>
        </Link>
      </div>

      <div className="nav-item">
        <Link className="nav-link" to="/sign-up">
          <strong>Sign Up</strong>
        </Link>
      </div>

      <div className="nav-item">
        <Link className="nav-link" to="/login">
          <strong>Log in</strong>
        </Link>
      </div>

      <div className="nav-item">
        <strong>
          <Link className="btn " to="/car-managers">
            Car managers
          </Link>
        </strong>
      </div>
    </div>
  );
};

export default Navbar;
