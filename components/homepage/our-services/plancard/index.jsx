import React from 'react';
import FeaturesList from '../Featureslist';

const PlanCard = ({ plan }) => {
  return (
    <div className="plan ">
      <h4 style={{color:"#264067"}} >{plan.title}</h4>
      <h3 className="price font-bold" style={{color:"#264067"}} >{plan.price}</h3>
      <div className="description">{plan.description}</div>
      <FeaturesList features={plan.features} />
      <a href="#" className="link">{plan.link_text}</a>
    </div>
  );
};

export default PlanCard;
