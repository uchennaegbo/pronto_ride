import React from 'react';
import { GiTakeMyMoney } from 'react-icons/gi';
import { IoIosPeople, IoLogoModelS } from 'react-icons/io';

import './SectionContent.css';
import SectionItems from './SectionItems';

const SectionContent = () => {
  return (
    <div className="layout-full-width bg-lighter">
      <div className="section1 section1-wrap">
        <h2 className="section-title">
          <strong>Share Ride With Peace Of Mind.</strong>
        </h2>
        <div className="section-max-container">
          <div className="section-flex-row">
            <SectionItems
              sectionIcon={<IoLogoModelS className="section-icon" />}
              h3Text="Share A Ride"
              pText="Share the extra space in your car."
            />
            <SectionItems
              sectionIcon={<GiTakeMyMoney className="section-icon" />}
              h3Text="Earn & Save Money"
              pText="Make extra income with free space in your car."
            />
            <SectionItems
              sectionIcon={<IoIosPeople className="section-icon" />}
              h3Text="Meet People"
              pText="Connect with people in your car."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionContent;
