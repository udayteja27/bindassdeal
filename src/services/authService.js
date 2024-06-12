const users = [];

export const registerUser = (username, password) => {
  if (users.some((user) => user.username === username)) {
    return false;
  }
  users.push({ username, password });
  return true;
};

export const validateUser = (username, password) => {
  return users.some(
    (user) => user.username === username && user.password === password
  );
};
