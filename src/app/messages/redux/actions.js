import types from './types';

const setCurrentRecipient = recipientUserId => ({
  type: types.SET_CURRENT_RECIPIENT,
  payload: recipientUserId,
});

const sendNewMessage = newMessage => ({
  type: types.SEND_NEW_MESSAGE,
  payload: newMessage,
});

export default {
  setCurrentRecipient,
  sendNewMessage,
};
