const useLocalStorage = (key: string) => {
  const setItem = (value: unknown) => {
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  const getItem = (key: string) => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : undefined;
  };

  return {
    setItem,
    getItem,
  };
};

export default useLocalStorage;
