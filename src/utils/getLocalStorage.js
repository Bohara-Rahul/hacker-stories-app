const useLocalStorage = (key) => {
  return localStorage.getItem(key);
};

export default useLocalStorage;