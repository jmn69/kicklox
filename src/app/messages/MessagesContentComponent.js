import React, { Component } from 'react';
import T from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { withTheme } from 'styled-components';
import Textarea from 'common/components/Textarea';
import Button from 'common/components/Button';

import {
  Container,
  RecipientMessage,
  CurrentUserMessage,
  MessagesContainer,
  NewMessageContainer,
  InputContainer,
  ButtonContainer,
  CurrentUserMessageContainer,
  RecipientMessageContainer,
  RecipientInfoMessage,
  CurrentUserInfoMessage,
} from './MessagesContent.s';
import { messageType } from './types';

class MessagesContent extends Component {
  static propTypes = {
    messages: T.arrayOf(messageType),
    sendNewMessage: T.func.isRequired,
    theme: T.any,
  };

  static defaultProps = {
    messages: [],
    theme: null,
  };

  state = {
    currentText: '',
  };

  render() {
    const { messages, theme } = this.props;
    const { currentText } = this.state;

    const renderMessages = messages.map(message => {
      if (message.currentUser) {
        return (
          <CurrentUserMessageContainer key={message.id}>
            <CurrentUserMessage>{message.message}</CurrentUserMessage>
            <CurrentUserInfoMessage>
              {message.sent}
              &nbsp;
              {message.read ? 'lu' : ''}
            </CurrentUserInfoMessage>
          </CurrentUserMessageContainer>
        );
      }
      return (
        <RecipientMessageContainer key={message.id}>
          <RecipientMessage>{message.message}</RecipientMessage>
          <RecipientInfoMessage>{message.sent}</RecipientInfoMessage>
        </RecipientMessageContainer>
      );
    });
    return (
      <Container>
        <MessagesContainer>{renderMessages}</MessagesContainer>
        {renderMessages &&
        Array.isArray(renderMessages) &&
        renderMessages.length > 0 ? (
          <NewMessageContainer>
            <InputContainer>
              <Textarea
                onChange={this.handleChange}
                value={currentText}
                rows={6}
              />
            </InputContainer>
            <ButtonContainer>
              <Button onClick={this.handleSend}>
                Send &nbsp;
                <FontAwesomeIcon
                  size="lg"
                  color={theme.colors.lightGray}
                  icon="paper-plane"
                />
              </Button>
            </ButtonContainer>
          </NewMessageContainer>
        ) : null}
      </Container>
    );
  }

  handleChange = e => {
    this.setState({
      currentText: e.target.value,
    });
  };

  handleSend = () => {
    const { currentText } = this.state;
    const { sendNewMessage } = this.props;

    if (!currentText) {
      return;
    }

    sendNewMessage(currentText);
  };
}

export default withTheme(MessagesContent);
