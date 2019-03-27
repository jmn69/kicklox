import types from './types';

const INITIAL_STATE = {
  userId: null,
  isLoading: false,
  error: null,
  data: [],
};

const messagesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FETCH_MESSAGES_REQUEST:
      return { ...state, isLoading: true, error: null };
    case types.FETCH_MESSAGES_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        data: action.payload,
        error: null,
      };
    }
    case types.FETCH_MESSAGES_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    case types.SET_CURRENT_RECIPIENT: {
      const { payload } = action;

      const updatedData = state.data.map(({ ...item }) => {
        if (item.recipientUserId === payload) {
          const updatedMessages = item.messages.map(message => ({
            ...message,
            read: true,
          }));
          item.messages = updatedMessages;
        }

        return item;
      });
      return {
        ...state,
        data: updatedData,
        userId: payload,
      };
    }
    case types.SEND_NEW_MESSAGE: {
      const { payload } = action;

      const updatedData = state.data.map(({ ...item }) => {
        if (item.recipientUserId === state.userId) {
          const updatedMessages = [
            ...item.messages,
            {
              id: Math.random()
                .toString(36)
                .substr(2, 9),
              message: payload,
              sent: '26/03/2019',
              read: false,
              currentUser: true,
            },
          ];

          item.messages = updatedMessages;
        }

        return item;
      });
      return {
        ...state,
        data: [...updatedData],
      };
    }
    default:
      return state;
  }
};

export default messagesReducer;
