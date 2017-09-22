import React from 'react';

const StepItem = ({step, stepnum}) => {
  return (
    <div>
      <li>Step {stepnum}</li>
      <li>{step.title}</li>
      <li>{step.description}</li>
      <img src={step.img_url} />
    </div>
  );
};



export default StepItem;
