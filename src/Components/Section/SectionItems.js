import React from 'react';

const SectionItems = props => {
  return (
    <div className="section-flex-item">
      {props.sectionIcon}
      <h3>
        <strong>{props.h3Text}</strong>
      </h3>
      <p className="text-metal">{props.pText}</p>
    </div>
  );
};

export default SectionItems;
