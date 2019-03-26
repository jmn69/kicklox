import makeBasicAPIReducer from 'common/utils/makeBasicAPIReducer';
import { combineReducers } from 'redux';
import types from './types';

const fetchMessagesReducer = makeBasicAPIReducer(
  types.FETCH_MESSAGES_REQUEST,
  types.FETCH_MESSAGES_SUCCESS,
  types.FETCH_MESSAGES_FAILURE
);

const rootMessagesReducer = combineReducers({
  fetchMessages: fetchMessagesReducer,
});

export default rootMessagesReducer;
