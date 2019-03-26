import React, { Component } from 'react';
import ListGroup from 'common/components/ListGroup';
import ListItem from 'common/components/ListItem';
import Circle from 'common/components/Circle';
import Avatar from 'react-avatar';
import T from 'prop-types';

import {
  UnreadMessageContainer,
  UnreadText,
  NameText,
  AvatarContainer,
} from './MenuContacts.s';

export default class MenuContactsComponent extends Component {
  static propTypes = {
    setCurrentRecipient: T.func.isRequired,
  };

  render() {
    const { setCurrentRecipient } = this.props;

    return (
      <ListGroup>
        <ListItem onClick={() => setCurrentRecipient(1)} clickable>
          <AvatarContainer>
            <Avatar
              size="50px"
              src="http://lorempixel.com/400/200/people/"
              round
              name="Alexandre Gffdfdddd"
            />
            <NameText>Alexandre</NameText>
          </AvatarContainer>
          <UnreadMessageContainer>
            <Circle>5</Circle>
            <UnreadText>non lu</UnreadText>
          </UnreadMessageContainer>
        </ListItem>
        <ListItem onClick={() => setCurrentRecipient(2)} clickable>
          <AvatarContainer>
            <Avatar size="50px" round name="Johanna Sater" />
            <NameText>Johanna</NameText>
          </AvatarContainer>
          <UnreadMessageContainer>
            <Circle>2</Circle>
            <UnreadText>non lu</UnreadText>
          </UnreadMessageContainer>
        </ListItem>
        <ListItem onClick={() => setCurrentRecipient(3)} clickable>
          <AvatarContainer>
            <Avatar
              size="50px"
              round
              src="http://lorempixel.com/400/200/animals/"
              name="Thomas Jezo"
            />
            <NameText>Thomas</NameText>
          </AvatarContainer>
          <UnreadMessageContainer>
            <Circle>1</Circle>
            <UnreadText>non lu</UnreadText>
          </UnreadMessageContainer>
        </ListItem>
        <ListItem onClick={() => setCurrentRecipient(4)} clickable>
          <AvatarContainer>
            <Avatar size="50px" round name="Julien Tomasso" />
            <NameText>Julien</NameText>
          </AvatarContainer>
        </ListItem>
        <ListItem onClick={() => setCurrentRecipient(5)} clickable>
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
