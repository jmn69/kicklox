import styled from 'styled-components';

export const UnreadMessageContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const UnreadText = styled.span`
  margin-left: 5px;
  font-size: ${props => props.theme.fontSizes.small};
  color: gray;
`;

export const NameText = styled.span`
  margin-left: 5px;
`;

export const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
`;
