import makeBasicAPIActions from 'common/utils/makeBasicAPIActions';
import { timeout } from 'common/utils/mockApi';
import Creators from './actions';

const setCurrentRecipient = Creators.setCurrentRecipient;
const sendNewMessage = Creators.sendNewMessage;

const mockedMessages = [
  {
    recipientUserId: 1,
    messages: [
      {
        id: 1,
        message: 'Hello',
        sent: '26/03/2019',
        read: false,
      },
      {
        id: 2,
        message: 'Comment tu vas ?',
        sent: '26/03/2019',
        read: false,
      },
      {
        id: 3,
        message: "Tu n'as pas l'air d'être connecté",
        sent: '26/03/2019',
        read: false,
      },
      {
        id: 4,
        message:
          "J'aurais besoin quand tu te reco de ton composant que tu as développé hier",
        sent: '26/03/2019',
        read: false,
      },
      {
        id: 5,
        message: 'Envoie moi la donc par mail merci',
        sent: '26/03/2019',
        read: false,
      },
    ],
  },
  {
    recipientUserId: 2,
    messages: [
      {
        id: 1,
        message: 'Hello',
        sent: '26/03/2019',
        read: false,
      },
      {
        id: 2,
        message: 'Comment tu vas ?',
        sent: '26/03/2019',
        read: false,
      },
    ],
  },
  {
    recipientUserId: 3,
    messages: [
      {
        id: 1,
        message: 'Hello',
        sent: '26/03/2019',
        read: false,
      },
    ],
  },
  {
    recipientUserId: 4,
    messages: [
      {
        id: 1,
        message: 'Hello',
        sent: '25/03/2019',
        read: true,
      },
      {
        id: 3,
        message: 'Comment tu vas ?',
        sent: '25/03/2019',
        read: true,
      },
      {
        id: 4,
        message: 'Salut très bien et toi ?',
        sent: '25/03/2019',
        read: true,
        currentUser: true,
      },
      {
        id: 6,
        message: 'Ca roule, dispo ce soir ?',
        sent: '25/03/2019',
        read: true,
      },
      {
        id: 7,
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        sent: '25/03/2019',
        read: true,
        currentUser: true,
      },
      {
        id: 8,
        message:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae euismod enim. Etiam et arcu libero. Pellentesque ornare posuere lacus sit amet elementum. Maecenas sagittis libero in tellus suscipit egestas. Donec sollicitudin at urna ut ornare. Sed semper orci et lorem mollis rutrum. Aliquam non tincidunt nisi. ',
        sent: '25/03/2019',
        read: true,
        public: false,
      },
      {
        id: 9,
        message:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu tellus non velit eleifend pellentesque. Donec id tristique neque. Proin sed mattis felis, hendrerit rhoncus massa.',
        sent: '25/03/2019',
        read: true,
        public: false,
        currentUser: true,
      },
      {
        id: 10,
        message:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu tellus non velit eleifend pellentesque. Donec id tristique neque. Proin sed mattis felis, hendrerit rhoncus massa.',
        sent: '25/03/2019',
        read: true,
        public: false,
      },
    ],
  },
  {
    recipientUserId: 5,
    messages: [
      {
        id: 1,
        message: 'Hello',
        sent: '25/03/2019',
        read: true,
      },
      {
        id: 3,
        message: 'Comment tu vas ?',
        sent: '25/03/2019',
        read: true,
      },
      {
        id: 4,
        message: 'Salut très bien et toi ?',
        sent: '25/03/2019',
        read: true,
        currentUser: true,
      },
      {
        id: 6,
        message: 'Ca roule, dispo ce soir ?',
        sent: '25/03/2019',
        read: true,
      },
      {
        id: 7,
        message:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu tellus non velit eleifend pellentesque. Donec id tristique neque. Proin sed mattis felis, hendrerit rhoncus massa.',
        sent: '25/03/2019',
        read: true,
        currentUser: true,
      },
      {
        id: 8,
        message:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae euismod enim. Etiam et arcu libero. Pellentesque ornare posuere lacus sit amet elementum. Maecenas sagittis libero in tellus suscipit egestas. Donec sollicitudin at urna ut ornare. Sed semper orci et lorem mollis rutrum. Aliquam non tincidunt nisi. ',
        sent: '25/03/2019',
        read: true,
        public: false,
      },
      {
        id: 9,
        message:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae euismod enim. Etiam et arcu libero. Pellentesque ornare posuere lacus sit amet elementum. Maecenas sagittis libero in tellus suscipit egestas. Donec sollicitudin at urna ut ornare. Sed semper orci et lorem mollis rutrum. Aliquam non tincidunt nisi. ',
        sent: '25/03/2019',
        read: true,
        public: false,
        currentUser: true,
      },
      {
        id: 10,
        message: 'Bye',
        sent: '25/03/2019',
        read: true,
        public: false,
      },
    ],
  },
];

const fetchMessages = makeBasicAPIActions(
  'FETCH_MESSAGES',
  (request, success, failure) => () => async dispatch => {
    dispatch(request());

    // api call delay mocked
    await timeout(2000);

    // mocked response
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
  setCurrentRecipient,
  sendNewMessage,
  fetchMessages,
};
