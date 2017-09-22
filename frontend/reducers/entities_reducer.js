import {combineReducers} from 'redux';
import projectReducer from './project_reducer';
import stepReducer from './step_reducer';

const entitiesReducer = combineReducers({
  projects: projectReducer,
  steps: stepReducer
});

export default entitiesReducer;
