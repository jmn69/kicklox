import { combineReducers } from 'redux';
import messagesReducer from '../app/messages/redux/reducers';

const rootReducer = combineReducers({
  messages: messagesReducer,
});

export default rootReducer;
