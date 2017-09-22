import React from 'react';

const StepItem = ({step, stepnum}) => {
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
  // let media;
  // if (step.img_url || step.video_url) {
  //   media = (
  //     <div className="picture">
  //       {image}
  //       {video}
  //     </div>
  //   );
  // }
  return (
    <div className="">
      <li className="stepNum">Step {stepnum}: {step.title}</li>
      <div className="pictextvid">
        {image}
        <li>{step.description}</li>
        {video}
      </div>
    </div>
  );
};



export default StepItem;
