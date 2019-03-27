import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
  width: 100%;
`;

export const RecipientMessage = styled.div`
  background: ${props => props.theme.colors.accent};
  width: 30%;
  min-height: 50px;
  margin-left: 25px;
  margin-top: 25px;
  border-radius: 4px;
  padding: 6px 6px 6px 10px;
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.white};
`;

export const CurrentUserMessage = styled.div`
  background: ${props => props.theme.colors.white};
  width: 30%;
  min-height: 50px;
  margin-right: 25px;
  margin-top: 25px;
  border-radius: 4px;
  padding: 6px 6px 6px 10px;
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.darkGray};
`;

export const MessagesContainer = styled.div`
  flex: 1;
  width: 100%;
  margin-bottom: 170px;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const NewMessageContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 150px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: ${props => props.theme.colors.lightGray};
  border-top: 1px solid rgba(0, 0, 0, 0.125);
`;

export const InputContainer = styled.div`
  width: 70%;
`;

export const ButtonContainer = styled.div`
  width: 15%;
`;

export const CurrentUserMessageContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
`;

export const RecipientMessageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const RecipientInfoMessage = styled.div`
  width: 30%;
  margin-left: 41px;
  display: flex;
  justify-content: flex-end;
  font-size: 14px;
  color: gray;
`;

export const CurrentUserInfoMessage = styled.div`
  width: 30%;
  margin-right: 30px;
  display: flex;
  justify-content: flex-end;
  font-size: ${props => props.theme.fontSizes.medium};
  color: gray;
`;
