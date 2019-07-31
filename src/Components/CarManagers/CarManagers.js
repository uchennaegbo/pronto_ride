import React from 'react';
import Goback from '../GoBack/GoBack';

const CarManagers = () => {
  return (
    <div>
      <Goback text=" Back To Home" to="/home" />
      <h1>
        {' '}
        We are currently implementing some updates to serve you better. <br />{' '}
        See you soon! ⚙︎
      </h1>
    </div>
  );
};

export default CarManagers;
