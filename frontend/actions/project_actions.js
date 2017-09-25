import * as ProjectUtil from '../util/project_util';

export const RECEIVE_ALL_PROJECTS = 'RECEIVE_ALL_PROJECTS';
export const RECEIVE_PROJECT = 'RECEIVE_PROJECT';

export const receiveAllProjects = projects => ({
  type: RECEIVE_ALL_PROJECTS,
  projects
});

export const receiveProject = project => ({
  type: RECEIVE_PROJECT,
  project
});

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
    .then(project => dispatch(receiveProject(project)))
);

export const updateProject = data => dispatch => (
  ProjectUtil.updateProject(data)
    .then(project => dispatch(receiveProject(project)))
);
