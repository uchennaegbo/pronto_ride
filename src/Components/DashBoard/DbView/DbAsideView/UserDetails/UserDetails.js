import React from 'react';
import './UserDetails.css';

const UserDetails = props => {
  return (
    <div className="userDetailsContainer">
      <div className="user-image">
        <img src={props.avatar} alt="Avatar" className="avatar" />
      </div>
      <div className="user-details">
        <h2 className="title">{props.name}</h2>
        <span className="info">{props.job}</span>
        <br />
        <span className="info">{props.address}</span>
        <br />
        <span className="info">{props.company}</span>
        <br />
        <hr />
        <span className="info">{props.desc}</span>
      </div>
    </div>
  );
};

export default UserDetails;
