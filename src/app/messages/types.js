import T from 'prop-types';

export const messageType = T.shape({
  id: T.any.isRequired,
  message: T.string.isRequired,
  sent: T.any.isRequired,
  read: T.bool.isRequired,
  currentUser: T.bool,
});

export const unReadType = T.shape({
  userId: T.any.isRequired,
  count: T.number.isRequired,
});
