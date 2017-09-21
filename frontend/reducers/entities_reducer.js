import {combineReducers} from 'redux';
import projectReducer from './project_reducer';

const entitiesReducer = combineReducers({
  projects: projectReducer,
});

export default entitiesReducer;
