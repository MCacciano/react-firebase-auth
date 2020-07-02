export const setLocalStorage = (name, data) => {
  if (!name || !data) return;

  localStorage.setItem(name, JSON.stringify(data));
  return JSON.stringify(data);
};

export const getLocalStorage = key => {
  return JSON.parse(localStorage.getItem(key));
};

export const removeFromLocalStorage = key => {
  localStorage.removeItem(key);
};

export const clearLocalStorage = () => {
  localStorage.clear();
};
