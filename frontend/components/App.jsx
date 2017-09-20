import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session/session_form_container';
import ProfileFormContainer from './profile/profile_form_container';
import Splash from './splash/splash';
import {Route} from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


let imgnum= (new Date().getSeconds() % 3);
const App = () => (
  <div>
    <nav className="navbar">
      <a href = "/">
        <img src="http://res.cloudinary.com/make-anything/image/upload/c_scale,h_108/v1505856907/Logo_Make_Anything_poheza.png"/>
      </a>
    </nav>
    <header>
      <AuthRoute path="/login" component={SessionFormContainer}/>
      <AuthRoute path="/signup" component={SessionFormContainer}/>
      <ProtectedRoute path="/member/" component={ProfileFormContainer}/>
      <GreetingContainer />
    </header>
    <div>
      <ReactCSSTransitionGroup
         transitionName="background"
         transitionEnterTimeout={1000}
         transitionLeaveTimeout={1000}
       >
         <Splash imgnum={imgnum}/>
       </ReactCSSTransitionGroup>
     </div>
  </div>
);

export default App;
