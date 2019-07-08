import React from 'react';
import DbNav from '../DbNav/DbNav';
import AsideView from './DbAsideView/DbAside';
// import MainSection from './DbMainSection/MainSection';
import './DbView.css';

const DbView = () => {
  return (
    <>
      <DbNav />
      <div className="main-display">
        <AsideView />
        {/* <MainSection /> */}
      </div>
    </>
  );
};

export default DbView;
