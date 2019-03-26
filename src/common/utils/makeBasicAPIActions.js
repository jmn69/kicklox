export const createActionCreator = type => payload =>
  payload ? { type, payload } : { type };

export const createErrorCreator = type => payload =>
  payload ? { type, payload, error: true } : { type, error: true };

export default (baseName, factory) => {
  const REQUEST = `${baseName}_REQUEST`;
  const SUCCESS = `${baseName}_SUCCESS`;
  const FAILURE = `${baseName}_FAILURE`;
  const request = createActionCreator(REQUEST);
  const success = createActionCreator(SUCCESS);
  const failure = createErrorCreator(FAILURE);
  return factory(request, success, failure);
};
