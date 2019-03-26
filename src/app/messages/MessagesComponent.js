import React, { Component, Fragment } from 'react';
import T from 'prop-types';
import { withTheme } from 'styled-components';

import Card from 'common/components/Card';
import Loader from 'common/components/Loader';
import Button from 'common/components/Button';

class SecurityComponent extends Component {
  static propTypes = {
    fetchMessages: T.func.isRequired,
    isLoading: T.bool.isRequired,
    // theme: T.any.isRequired,
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
    // const { theme, isLoading, messages } = this.props;
    const { initialRenderComplete } = this.state;

    return (
      <Fragment>
        {!initialRenderComplete ? (
          <Loader fullPage />
        ) : (
          <div>
            app
            <Card>
              <Button>test</Button>
            </Card>
          </div>
        )}
      </Fragment>
    );
  }
}

export default withTheme(SecurityComponent);
