import React from 'react';
import { Link } from 'react-router-dom';
import ProjectIndexContainer from '../project/project_index_container';
import Slider from 'react-slick';

class Splash extends React.Component {
  constructor(props){
    super(props);
    this.state={
      text: ""
    };
    // this.dummyInput.bind(this);
    this.dummyInput("Artwork      ");
    this.bgclass="section parallax bg1";
  }
  dummyInput(string){
    // if (this.state.text === "" || "Artwork") {
      let dummyText = Array.from(string);
      this.setState({text: ""});
      this.clearInterval = setInterval(() => {
        if (dummyText.length) {
          this.setState({text: this.state.text + dummyText.shift()});
        } else {
          clearTimeout(this.clearInterval);
          if (string.slice(0,1) === "C") {
            this.bgclass="section parallax bg3";
            this.dummyInput("Woodwork   ");
          } else if (string === "Woodwork   ") {
            this.bgclass="section parallax bg1";
            this.dummyInput("Artwork      ");
          } else {
            this.bgclass="section parallax bg2";
            this.dummyInput("Cooking      ");
          }
        }
      }, 300);
  }

  render(){
    // let settings = {
    //   dots: true,
    //   infinite: true,
    //   speed: 1200,
    //   autoplay: true,
    //   slidesToShow: 1,
    //   slidesToScroll: 1
    // };

    // const urls = {
    //   0: 'https://res.cloudinary.com/make-anything/image/upload/v1505864280/slide1_scmp2g.jpg',
    //   1: 'https://res.cloudinary.com/make-anything/image/upload/v1505864280/slide2_pcohgl.jpg',
    //   2: 'https://res.cloudinary.com/make-anything/image/upload/v1505864281/slide3_tp1fuk.jpg'
    // };
    // const style = {
    //   position: 'fixed',
    //   left: 0,
    //   top: 98,
    //   zIndex: -1000,
    //   backgroundColor: '#FFFEF4',
    //   width: '100%'
    // };
  //  let src = urls[this.props.imgnum];
  //  console.log(this.props.imgnum);
  // <Slider {...settings}>
  //   <div className="slider">
  //     <img src="https://res.cloudinary.com/make-anything/image/upload/v1505864280/slide1_scmp2g.jpg"/>
  //   </div>
  //   <div className="slider">
  //     <img src="https://res.cloudinary.com/make-anything/image/upload/v1505864280/slide2_pcohgl.jpg"/></div>
  //     <div className="slider">
  //       <img src="https://res.cloudinary.com/make-anything/image/upload/v1505864281/slide3_tp1fuk.jpg"/></div>
  //     </Slider>

   return (
    <main className="wrapper">
      <div className={this.bgclass}>
        <div className="letsmake">
          <h3 className="dark">Let's Make    __________</h3>
          <input type="text" value={this.state.text}/>
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
