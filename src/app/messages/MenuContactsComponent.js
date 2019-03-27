import React, { Component } from 'react';
import ListGroup from 'common/components/ListGroup';
import ListItem from 'common/components/ListItem';
import Circle from 'common/components/Circle';
import Avatar from 'react-avatar';
import T from 'prop-types';

import { unReadType } from './types';

import {
  UnreadMessageContainer,
  UnreadText,
  NameText,
  AvatarContainer,
} from './MenuContacts.s';

export default class MenuContactsComponent extends Component {
  static propTypes = {
    setCurrentRecipient: T.func.isRequired,
    currentRecipientId: T.number,
    unRead: T.arrayOf(unReadType),
  };

  static defaultProps = {
    currentRecipientId: null,
    unRead: [],
  };

  render() {
    const { setCurrentRecipient, currentRecipientId, unRead } = this.props;

    // with a real data model it should be done in the data iteration
    const countOne =
      unRead.find(ur => ur.userId === 1) &&
      unRead.find(ur => ur.userId === 1).count;
    const countTwo =
      unRead.find(ur => ur.userId === 2) &&
      unRead.find(ur => ur.userId === 2).count;
    const countThree =
      unRead.find(ur => ur.userId === 3) &&
      unRead.find(ur => ur.userId === 3).count;

    return (
      <ListGroup>
        <ListItem
          active={currentRecipientId === 1}
          onClick={() => setCurrentRecipient(1)}
          clickable
        >
          <AvatarContainer>
            <Avatar
              size="50px"
              src="http://lorempixel.com/400/200/people/"
              round
              name="Alexandre Gffdfdddd"
            />
            <NameText>Alexandre</NameText>
          </AvatarContainer>
          {countOne && countOne > 0 ? (
            <UnreadMessageContainer>
              <Circle>{countOne}</Circle>
              <UnreadText>non lu</UnreadText>
            </UnreadMessageContainer>
          ) : null}
        </ListItem>
        <ListItem
          active={currentRecipientId === 2}
          onClick={() => setCurrentRecipient(2)}
          clickable
        >
          <AvatarContainer>
            <Avatar size="50px" round name="Johanna Sater" />
            <NameText>Johanna</NameText>
          </AvatarContainer>
          {countTwo && countTwo > 0 ? (
            <UnreadMessageContainer>
              <Circle>{countTwo}</Circle>
              <UnreadText>non lu</UnreadText>
            </UnreadMessageContainer>
          ) : null}
        </ListItem>
        <ListItem
          active={currentRecipientId === 3}
          onClick={() => setCurrentRecipient(3)}
          clickable
        >
          <AvatarContainer>
            <Avatar
              size="50px"
              round
              src="http://lorempixel.com/400/200/animals/"
              name="Thomas Jezo"
            />
            <NameText>Thomas</NameText>
          </AvatarContainer>
          {countThree && countThree > 0 ? (
            <UnreadMessageContainer>
              <Circle>{countThree}</Circle>
              <UnreadText>non lu</UnreadText>
            </UnreadMessageContainer>
          ) : null}
        </ListItem>
        <ListItem
          active={currentRecipientId === 4}
          onClick={() => setCurrentRecipient(4)}
          clickable
        >
          <AvatarContainer>
            <Avatar size="50px" round name="Julien Tomasso" />
            <NameText>Julien</NameText>
          </AvatarContainer>
        </ListItem>
        <ListItem
          active={currentRecipientId === 5}
          onClick={() => setCurrentRecipient(5)}
          clickable
        >
          <AvatarContainer>
            <Avatar
              size="50px"
              round
              src="http://lorempixel.com/400/200/sports/"
              name="Jessica Margaud"
            />
            <NameText>Jessica</NameText>
          </AvatarContainer>
        </ListItem>
      </ListGroup>
    );
  }
}
