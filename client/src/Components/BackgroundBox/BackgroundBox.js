import React from 'react';
import './BackgroundBox.css';
import TextContent from './TextContent/TextContent';

const BackgroundBox = () => {
  return (
    <div className="backgroundBox">
      <div className="dim" />
      {/* <Navbar /> */}
      <TextContent
        h1text="Find your Next Ride"
        ptext="Book from thousands of drivers going your way and get to your
        destination."
      />
    </div>
  );
};

export default BackgroundBox;
