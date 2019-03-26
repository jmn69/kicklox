import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { ThemeProvider } from 'styled-components';

import Fonts from './themes/Fonts';
import styledTheme from './themes/styledTheme';
import './css/Init.css';
import MessagesContainer from './app/messages/MessagesContainer';
import { Header, Container, AppContainer } from './App.s';

library.add(faCircleNotch);

class App extends Component {
  componentDidMount() {
    Fonts();
  }

  render() {
    return (
      <ThemeProvider theme={styledTheme}>
        <Container>
          <Header>Messages</Header>
          <AppContainer>
            {/* In a true app we have the rounting system here */}
            <MessagesContainer />
          </AppContainer>
        </Container>
      </ThemeProvider>
    );
  }
}

export default App;
