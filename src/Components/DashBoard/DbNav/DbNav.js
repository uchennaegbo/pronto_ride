import React from 'react';
import Pronto from '../../../assets/Pronto.svg';
import './DbNav.css';
import {
  FaRegBell,
  FaRegQuestionCircle,
  FaRegUserCircle,
  FaCaretDown
} from 'react-icons/fa';

const DbNav = () => {
  return (
    <div className="dbnav-container">
      <div className="logo-icon-container">
        <img src={Pronto} alt="pronto-logo" className="logo-icon" />
        Pronto
      </div>

      <div className="dbnav-item">
        <a className="nav-link" href="/notifications">
          <strong>
            <FaRegBell className="bell" />
          </strong>
        </a>
      </div>

      <div className="dbnav-item">
        <a className="nav-link" href="/help">
          <span>
            <FaRegQuestionCircle className="question" />
            Help
          </span>
        </a>
      </div>

      <div className="dbnav-item">
        <a className="nav-link" href="/user">
          <FaRegUserCircle className="user" />
          <span className="dbspan">Uchenna</span>
          <FaCaretDown className="" />
        </a>
      </div>

      <div className="dbnav-item">
        <a className="btn btn-balanced" href="/upgrade">
          Upgrade to Premium
        </a>
      </div>
    </div>
  );
};

export default DbNav;
