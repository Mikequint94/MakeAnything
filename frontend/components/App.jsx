import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session/session_form_container';
import ProfileFormContainer from './profile/profile_form_container';
import ProjectIndexContainer from './project/project_index_container';
import Splash from './splash/splash';
import Resume from './resume/resume';
import {Route, Switch} from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import ProjectShowContainer from './project/project_show_container';
import ProjectFormContainer from './project/project_form_container';
import StepFormContainer from './step/step_form_container';
import SearchContainer from './search/search_container';
import ProfileProjectsContainer from './profile/profile_projects_container';
import SearchProjectsContainer from './search/search_projects_container';
import Footer from './footer/footer';

const App = () => (
  <div>
    <nav className="navbar">
      <a href = "/">
        <img src="https://res.cloudinary.com/make-anything/image/upload/c_scale,h_90/v1511735627/Logo_v3_bhgirf.png"/>
      </a>
      <SessionFormContainer />
      <GreetingContainer />
      <ProfileFormContainer/>
      <SearchContainer/>
    </nav>
    <header>

    </header>
    <Switch>
      <ProtectedRoute path="/projects/new" component={ProjectFormContainer}/>
      <ProtectedRoute path="/projects/:projectId/:projectName/edit" component={ProjectFormContainer}/>
      <Route path="/projects/:projectName" component={ProjectShowContainer}/>
      <Route path="/member/:memberId/:memberName/projects" component={ProfileProjectsContainer}/>
      <Route path="/howto/:searchQuery" component={SearchProjectsContainer}/>
      <Route  path="/resume" component={Resume}/>
      <Route  path="/" component={Splash}/>
    </Switch>
    <ProtectedRoute path="/projects/:projectId/:projectName/steps/new" component={StepFormContainer}/>
    <ProtectedRoute path="/projects/:projectId/:projectName/:stepId/:stepNum/edit" component={StepFormContainer}/>
    <nav className="footer">
      <Footer />
    </nav>

  </div>
);

export default App;
