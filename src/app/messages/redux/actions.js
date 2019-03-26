import types from './types';

const setCurrentRecipient = recipientUserId => ({
  type: types.SET_CURRENT_RECIPIENT,
  payload: recipientUserId,
});

export default {
  setCurrentRecipient,
};
