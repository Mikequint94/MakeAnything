import React from 'react';


const editstepfn = () => {
  console.log("edit step");
};

const StepItem = ({step, stepnum, owner}) => {
  let image;
  if (step.img_url) {
    image = (
      <div className="picture">
        <img src={step.img_url} />
      </div>
    );
  }
  let video;
  if (step.video_url) {
    video = (
      <div className="picture">
        <div className="slightpad">
          <iframe
              className="videocontainer"
              width="500" height="350"
              src={`https://www.youtube.com/embed/${step.video_url.slice(32)}`}
              allowFullScreen
          />
        </div>
      </div>
    );
  }

  let editstep;
  if (owner){
    editstep = (
      <div>
        <button onClick={editstepfn}>Edit</button>
      </div>
    );
  }
  return (
    <div className="">
      <li className="stepNum">Step {stepnum}: {step.title}</li>
      <div className="pictextvid">
        <div  className="steps-edit-step">
          {editstep}
        </div>
        {image}
        <li>{step.description}</li>
        {video}
      </div>
    </div>
  );
};



export default StepItem;
