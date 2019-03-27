import { connect } from 'react-redux';
import MenuContactsComponent from './MenuContactsComponent';
import { messagesOperations } from './redux';

const mapStateToProps = state => {
  const { userId, data } = state.messages;

  const unReadData = [];
  data &&
    Array.isArray(data) &&
    data.forEach(item => {
      let count = 0;
      item.messages.forEach(message => {
        if (!message.read) {
          count += 1;
        }
      });
      unReadData.push({ userId: item.recipientUserId, count });
    });

  return {
    currentRecipientId: userId,
    unRead: unReadData,
  };
};

const mapDispatchToProps = dispatch => ({
  setCurrentRecipient: recipientUserId =>
    dispatch(messagesOperations.setCurrentRecipient(recipientUserId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuContactsComponent);
