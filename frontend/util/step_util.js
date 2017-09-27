export const fetchAllSteps = (project_id) => {
  return  $.ajax({
    method: 'GET',
    url: 'api/steps',
    data: {step: {project_id}}
  });
};

export const createStep = step => (
  $.ajax({
    method: 'POST',
    url: '/api/steps',
    data: {step}
  })
);

export const updateStep = step => (
  $.ajax({
    method: 'PATCH',
    url: `api/steps/${step.id}`,
    data: {step}
  })
);

export const deleteStep = step => (
  $.ajax({
    method: 'destroy',
    url: `api/steps/${step.id}`
  })
);
