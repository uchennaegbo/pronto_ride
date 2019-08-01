import React from 'react';
import UserDetails from './UserDetails/UserDetails';
import SideNav from './SideLink/SideNav';
import avatar from '../../../../assets/avatar.png';
import './DbAside.css';

const DbAside = () => {
  return (
    <div className="aside-wrapper">
      <UserDetails
        avatar={avatar}
        name="Egbo Uchenna."
        job="Software Engineer"
        address="Lekki,Lagos."
        company="Decagon."
        desc="My Name Is Egbo Uchenna Matthew and I don't know how to drive yet but i am sure that you can trust me to learn with your life. Please ride with me! 😂"
      />
      <SideNav />
    </div>
  );
};

export default DbAside;
