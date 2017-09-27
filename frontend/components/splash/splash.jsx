import React from 'react';
import { Link } from 'react-router-dom';
import ProjectIndexContainer from '../project/project_index_container';
// import Slider from 'react-slick';

class Splash extends React.Component {
  constructor(props){
    super(props);
    this.state={
      text: ""
    };
    // this.dummyInput.bind(this);
    this.bgclass="section parallax bg1";
  }
  componentDidMount(){
    this.dummyInput("Artwork      ");
  }
  componentWillUnmount(){
    clearTimeout(this.clearInterval);
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
