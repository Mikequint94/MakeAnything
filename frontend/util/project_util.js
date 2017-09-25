export const fetchAllProjects = () => (
  $.ajax({
    method: 'GET',
    url: 'api/projects'
  })
);
export const fetchUserProjects = (author_id) => (
  $.ajax({
    method: 'GET',
    url: `api/projects?author_id=${author_id}`
  })
);

export const fetchProject = (projectId) => (
  $.ajax({
    method: 'GET',
    url: `api/projects/${projectId}`
  })
);

export const createProject = project => (
  $.ajax({
    method: 'POST',
    url: '/api/projects',
    data: {project}
  })
);

export const updateProject = project => (
  $.ajax({
    method: 'PATCH',
    url: `api/projects/${project.id}`,
    project
  })
);
