import { connect } from 'react-redux';
import MessagesComponent from './MessagesComponent';
import { messagesOperations } from './redux';

const mapStateToProps = state => {
  const { data, isLoading, error } = state.messages.fetchMessages;
  return {
    isLoading,
    error,
    messages: data,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchMessages: () => dispatch(messagesOperations.fetchMessages()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessagesComponent);
