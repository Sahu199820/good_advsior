import React from 'react';

const FeaturesList = ({ features }) => {
  return (
    <ul className='feature-list'>
      {features.map((feature, idx) => (
        <li key={idx}>{feature}</li>
      ))}
    </ul>
  );
};

export default FeaturesList;
