import * as ProjectUtil from '../util/project_util';

export const RECEIVE_ALL_PROJECTS = 'RECEIVE_ALL_PROJECTS';
export const RECEIVE_PROJECT = 'RECEIVE_PROJECT';

export const RECEIVE_PROJECT_ERRORS = "RECEIVE_PROJECT_ERRORS";
export const CLEAR_PROJECT_ERRORS = "CLEAR_PROJECT_ERRORS";

export const receiveErrors = (errors) => ({
  type: RECEIVE_PROJECT_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_PROJECT_ERRORS,
});

export const receiveAllProjects = projects => ({
  type: RECEIVE_ALL_PROJECTS,
  projects
});

export const receiveProject = project => ({
  type: RECEIVE_PROJECT,
  project
});


import APIsearch from '../util/search_util';
export const requestSearchProjects = (query) => dispatch => (
  APIsearch(query)
  .then((projects) => dispatch(receiveAllProjects(projects)))
);


export const requestAllProjects = () => dispatch => (
  ProjectUtil.fetchAllProjects()
  .then(projects => dispatch(receiveAllProjects(projects)))
);

export const requestProject = projectId => dispatch => (
  ProjectUtil.fetchProject(projectId)
    .then(project => dispatch(receiveProject(project)))
);
export const requestUserProjects = authorId => dispatch => (
  ProjectUtil.fetchUserProjects(authorId)
    .then(projects => dispatch(receiveAllProjects(projects)))
);

export const createProject = data => dispatch => (
  ProjectUtil.createProject(data)
    .then(project => dispatch(receiveProject(project)),
    err => dispatch(receiveErrors(err.responseJSON)))
);

export const updateProject = data => dispatch => (
  ProjectUtil.updateProject(data)
    .then(project => dispatch(receiveProject(project)),
    err => (dispatch(receiveErrors(err.responseJSON))))
);
