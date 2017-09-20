import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    const urls = {
      0: 'http://res.cloudinary.com/make-anything/image/upload/v1505864280/slide1_scmp2g.jpg',
      1: 'http://res.cloudinary.com/make-anything/image/upload/v1505864280/slide2_pcohgl.jpg',
      2: 'http://res.cloudinary.com/make-anything/image/upload/v1505864281/slide3_tp1fuk.jpg'
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
     <div>
       <div className="letsmake">
          <h3 className="dark">Let's Make </h3>
          <h3 className="light">  ________</h3>
       </div>
       <img className="splash" src={src} style={style} />
     </div>
   );
  }
}

export default Splash;
