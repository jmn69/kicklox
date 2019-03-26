export const timeout = ms => new Promise(resolve => setTimeout(resolve, ms));
export const sleep = async (delay, fn, ...args) => {
  await timeout(delay || 2000);
  return fn(...args);
};
