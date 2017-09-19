export const postSignup = (formUser) => {
  return $.ajax({
    url: '/api/users',
    method: 'post',
    data: { user: formUser }
  });
};

export const postLogin = (user) => {
  return $.ajax({
    url: '/api/session',
    method: 'post',
    data: { user }
  });
};

export const deleteLogout = () => {
  return $.ajax({
    url: '/api/session',
    method: 'delete'
  });
};
