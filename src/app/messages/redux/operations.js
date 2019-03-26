import makeBasicAPIActions from 'common/utils/makeBasicAPIActions';
import { timeout } from 'common/utils/mockApi';
import Creators from './actions';

const setCurrentRecipient = Creators.setCurrentRecipient;

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
        message: 'Nope désolé je fais un test technique ;)',
        sent: '25/03/2019',
        read: true,
        currentUser: true,
      },
      {
        id: 8,
        message:
          'Ah dommage je voulais te proposer de sortir boire un verre, une prochaine fois alors !',
        sent: '25/03/2019',
        read: true,
        public: false,
      },
      {
        id: 9,
        message: 'Yes on se tient au jus pour la prochaine fois ! bonne soirée',
        sent: '25/03/2019',
        read: true,
        public: false,
        currentUser: true,
      },
      {
        id: 10,
        message: 'Toi aussi',
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
        message: 'Nope désolé je fais un test technique ;)',
        sent: '25/03/2019',
        read: true,
        currentUser: true,
      },
      {
        id: 8,
        message:
          'Ah dommage je voulais te proposer de sortir boire un verre, une prochaine fois alors !',
        sent: '25/03/2019',
        read: true,
        public: false,
      },
      {
        id: 9,
        message: 'Yes on se tient au jus pour la prochaine fois ! bonne soirée',
        sent: '25/03/2019',
        read: true,
        public: false,
        currentUser: true,
      },
      {
        id: 10,
        message: 'Toi aussi',
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
  fetchMessages,
};
