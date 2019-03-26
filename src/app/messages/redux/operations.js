import makeBasicAPIActions from 'common/utils/makeBasicAPIActions';

const mockedMessages = [{ id: 1, message: '', public: true }];

const fetchMessages = makeBasicAPIActions(
  'FETCH_MESSAGES',
  (request, success, failure) => () => async dispatch => {
    dispatch(request());

    // let's pretend with have a true response from an api call here
    const response = { ok: true, data: mockedMessages };

    if (response.ok) {
      try {
        dispatch(success(response.data));
        return Promise.resolve();
      } catch (error) {
        dispatch(failure(error));
        return Promise.reject();
      }
    } else {
      dispatch(failure('Something went wrong'));
      return Promise.reject();
    }
  }
);

export default {
  fetchMessages,
};
