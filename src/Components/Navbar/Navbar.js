import React from 'react';
import './Navbar.css';
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
        Pronto
      </div>

      <div className="nav-item">
        <a className="nav-link" href="/sign-in">
          <strong>Sign Up</strong>
        </a>
      </div>

      <div className="nav-item">
        <a className="nav-link" href="/login">
          <strong>Sign in</strong>
        </a>
      </div>

      <div class="nav-item">
        <strong>
          <a className="btn " href="/car-managers">
            Car managers
          </a>
        </strong>
      </div>
    </div>
  );
};

export default Navbar;
