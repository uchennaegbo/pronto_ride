import React from 'react';

const SideLink = props => {
  return (
    <>
      <a href={props.href}>
        <div className={props.class}>
          <div className="sidelink-icon-wrapper">{props.icon}</div>
          <div className="sidelink-text-wrapper">
            <span className="title">{props.text}</span>
          </div>
        </div>
      </a>
    </>
  );
};

export default SideLink;
