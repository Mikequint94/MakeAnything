import {RECEIVE_ALL_PROJECTS,
        RECEIVE_PROJECT
        // RECEIVE_NEW_PROJECT,
        // RECEIVE_UPDATED_PROJECT
      } from '../actions/project_actions';

const initialState = {
  projects: [],
};

const projectReducer = (state = initialState, action) => {
  let newState = Object.assign({}, state);
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_PROJECTS:
      newState = action.projects;
      return newState;
    case RECEIVE_PROJECT:
      newState[action.project.id] = action.project;
      return newState;
    default:
      return state;
  }
};

export default projectReducer;
