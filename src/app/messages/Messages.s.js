import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  min-height: 100%;
`;

export const LeftContainer = styled.div`
  flex: 1;
  min-width: 215px;
  background: ${props => props.theme.colors.white};
  min-height: 100%;
`;

export const RightContainer = styled.div`
  flex: 3;
  background: ${props => props.theme.colors.lightGray};
  min-height: 100%;
`;
