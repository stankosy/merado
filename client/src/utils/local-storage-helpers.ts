export const set = (data: any, key: string) =>
  localStorage.setItem(key, JSON.stringify(data));

export const get = (key: string) => {
  const cachedData = localStorage.getItem(key);

  return cachedData && cachedData !== 'undefined'
    ? JSON.parse(cachedData)
    : undefined;
};

export const remove = (key: string) => localStorage.removeItem(key);

export const clear = () => localStorage.clear();

export const createStorage = (key: string) => {
  return {
    set: (data: any) => set(data, key),
    get: () => get(key),
    clear: () => remove(key),
  };
};
