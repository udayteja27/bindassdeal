export const setSession = (session) => {
  localStorage.setItem("session", JSON.stringify(session));
};

export const getSession = () => {
  const session = localStorage.getItem("session");
  return session ? JSON.parse(session) : null;
};

export const clearSession = () => {
  localStorage.removeItem("session");
};

export const isAuthenticated = () => {
  return !!getSession();
};
