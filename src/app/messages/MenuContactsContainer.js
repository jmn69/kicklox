import { connect } from 'react-redux';
import MenuContactsComponent from './MenuContactsComponent';
import { messagesOperations } from './redux';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  setCurrentRecipient: recipientUserId =>
    dispatch(messagesOperations.setCurrentRecipient(recipientUserId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuContactsComponent);
