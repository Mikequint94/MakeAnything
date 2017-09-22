import React from 'react';

const StepItem = ({step, stepnum}) => {
  return (
    <div className="">
      <li className="stepNum">Step {stepnum}: {step.title}</li>
      <div className="pictextvid">
        <li>{step.description}</li>
        <div className="picture">
          <img src={step.img_url} />
        </div>
      </div>
    </div>
  );
};



export default StepItem;
