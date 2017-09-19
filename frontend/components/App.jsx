import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session/session_form_container';
import {Route} from 'react-router-dom';
import {AuthRoute} from '../util/route_util';

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
      <GreetingContainer />
    </header>
  </div>
);

export default App;
