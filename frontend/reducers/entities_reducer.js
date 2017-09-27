import {combineReducers} from 'redux';
import projectReducer from './project_reducer';
import stepReducer from './step_reducer';
import commentReducer from './comment_reducer';

const entitiesReducer = combineReducers({
  projects: projectReducer,
  steps: stepReducer,
  comments: commentReducer
});

export default entitiesReducer;
