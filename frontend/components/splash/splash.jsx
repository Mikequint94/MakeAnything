import React from 'react';
import { Link } from 'react-router-dom';
import ProjectIndexContainer from '../project/project_index_container';
// import Slider from 'react-slick';

class Splash extends React.Component {
  constructor(props){
    super(props);
    this.state={
      text: "",
      link: "howto/artwork"
    };
    this.bgclass="section parallax bg1";
  }
  componentDidMount(){
    this.dummyInput("Artwork      ", 2);
  }
  componentWillUnmount(){
    clearTimeout(this.clearInterval);
  }
  dummyInput(string, idx){
      let dummyText = Array.from(string);
      this.setState({text: ""});
      this.clearInterval = setInterval(() => {
        if (dummyText.length) {
          this.setState({text: this.state.text + dummyText.shift()});
        } else {
          clearTimeout(this.clearInterval);
          if (idx === 0) {
            this.bgclass="section parallax bg3";
            this.dummyInput("Woodwork   ", 1);
          } else if (idx === 1) {
            this.bgclass="section parallax bg1";
            this.dummyInput("Artwork      ", 2);
          } else {
            this.bgclass="section parallax bg2";
            this.dummyInput("Cooking      ", 0);
          }
        }
      }, 300);
  }
  searchText() {
    this.props.history.push("/howto/cooking");
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
