export const selectAllProjects = (state) => {
  // console.log(state);
  const projects = Object.values(state)[0].projects;
  // console.log(projects);
  return Object.values(projects);
};
