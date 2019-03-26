import styled from 'styled-components';

export const Header = styled.div`
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${props => props.theme.fontSizes.large};
  font-weight: 700;
  letter-spacing: 2px;
`;

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  width: 100%;
  box-sizing: border-box;
  position: relative;
  height: calc(100% - 48px);
  margin-left: 0;
  background: ${props => props.theme.lightGray};
  color: ${props => props.theme.darkGray};
`;

export const Container = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
`;
