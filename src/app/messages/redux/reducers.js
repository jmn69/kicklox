import makeBasicAPIReducer from 'common/utils/makeBasicAPIReducer';
import { combineReducers } from 'redux';
import types from './types';

const fetchMessagesReducer = makeBasicAPIReducer(
  types.FETCH_MESSAGES_REQUEST,
  types.FETCH_MESSAGES_SUCCESS,
  types.FETCH_MESSAGES_FAILURE
);

const INITIAL_STATE = {
  userId: false,
};
const currentRecipientUserReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SET_CURRENT_RECIPIENT: {
      const { payload } = action;
      return {
        ...state,
        userId: payload,
      };
    }

    default:
      return state;
  }
};

const rootMessagesReducer = combineReducers({
  fetchMessages: fetchMessagesReducer,
  currentRecipient: currentRecipientUserReducer,
});

export default rootMessagesReducer;
