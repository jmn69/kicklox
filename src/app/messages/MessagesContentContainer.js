import { connect } from 'react-redux';
import MessagesContentComponent from './MessagesContentComponent';
import { messagesOperations } from './redux';

const mapStateToProps = state => {
  const { data, userId } = state.messages;
  const currentRecipientData =
    data &&
    Array.isArray(data) &&
    data.find(item => item.recipientUserId === userId);
  return {
    messages: currentRecipientData ? currentRecipientData.messages : [],
  };
};

const mapDispatchToProps = dispatch => ({
  setCurrentRecipient: recipientUserId =>
    dispatch(messagesOperations.setCurrentRecipient(recipientUserId)),
  sendNewMessage: newMessage =>
    dispatch(messagesOperations.sendNewMessage(newMessage)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessagesContentComponent);
