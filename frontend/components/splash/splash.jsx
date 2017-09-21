import React from 'react';
import { Link } from 'react-router-dom';
import ProjectIndexContainer from '../project/project_index_container';

class Splash extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    const urls = {
      0: 'https://res.cloudinary.com/make-anything/image/upload/v1505864280/slide1_scmp2g.jpg',
      1: 'https://res.cloudinary.com/make-anything/image/upload/v1505864280/slide2_pcohgl.jpg',
      2: 'https://res.cloudinary.com/make-anything/image/upload/v1505864281/slide3_tp1fuk.jpg'
    };
    const style = {
      position: 'fixed',
      left: 0,
      top: 98,
      zIndex: -1000,
      backgroundColor: '#FFFEF4',
      width: '100%'
    };
   let src = urls[this.props.imgnum];
  //  console.log(this.props.imgnum);

   return (
    <main className="wrapper">
      <div className="section parallax bg1">
        <div className="letsmake">
          <h3 className="dark">Let's Make </h3>
          <h3 className="light">  ________</h3>
        </div>
      </div>
      <div>
        <ProjectIndexContainer />
      </div>
    </main>
   );
  }
}

export default Splash;
