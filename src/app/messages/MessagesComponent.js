import React, { Component, Fragment } from 'react';
import T from 'prop-types';
import Loader from 'common/components/Loader';

import { Container, LeftContainer, RightContainer } from './Messages.s';
import MenuContactsContainer from './MenuContactsContainer';
import MessagesContentContainer from './MessagesContentContainer';

export default class SecurityComponent extends Component {
  static propTypes = {
    fetchMessages: T.func.isRequired,
    isLoading: T.bool.isRequired,
  };

  state = { initialRenderComplete: false };

  componentDidMount() {
    const { fetchMessages } = this.props;
    fetchMessages();
  }

  componentDidUpdate(prevProps) {
    const { isLoading } = this.props;
    const { isLoading: prevIsLoading } = prevProps;

    if (prevIsLoading && !isLoading) {
      this.setState({ initialRenderComplete: true }); // eslint-disable-line react/no-did-update-set-state
    }
  }

  render() {
    const { initialRenderComplete } = this.state;

    return (
      <Fragment>
        {!initialRenderComplete ? (
          <Loader fullPage text="Chargement des messages..." />
        ) : (
          <Container>
            <LeftContainer>
              <MenuContactsContainer />
            </LeftContainer>
            <RightContainer>
              <MessagesContentContainer />
            </RightContainer>
          </Container>
        )}
      </Fragment>
    );
  }
}
