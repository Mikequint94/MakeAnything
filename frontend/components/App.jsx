import React from 'react';
import GreetingContainer from './greeting/greeting_container';
// import PictureUpload from './session/picture_upload';
import SessionFormContainer from './session/session_form_container';
import ProfileFormContainer from './profile/profile_form_container';
import ProjectIndexContainer from './project/project_index_container';
import Splash from './splash/splash';
import {Route} from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ProjectShowContainer from './project/project_show_container';


let imgnum= (new Date().getSeconds() % 3);
const App = () => (
  <div>
    <nav className="navbar">
      <a href = "/">
        <img src="https://res.cloudinary.com/make-anything/image/upload/c_scale,h_108/v1505856907/Logo_Make_Anything_poheza.png"/>
      </a>
      <AuthRoute path="/login" component={SessionFormContainer}/>
      <AuthRoute path="/signup" component={SessionFormContainer}/>
      <GreetingContainer />
      <ProtectedRoute path="/member/" component={ProfileFormContainer}/>
    </nav>
    <header>

    </header>
    <div>
      <Route path="/projects/:projectName" component={ProjectShowContainer}/>

      <ReactCSSTransitionGroup
         transitionName="background"
         transitionEnterTimeout={1000}
         transitionLeaveTimeout={1000}>
         <Splash imgnum={imgnum}/>
       </ReactCSSTransitionGroup>
     </div>
  </div>
);

export default App;
