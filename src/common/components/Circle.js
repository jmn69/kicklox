import styled from 'styled-components';

export default styled.span`
  background: ${props => (props.bg ? props.bg : props.theme.colors.third)};
  border-radius: 50%;
  height: 20px;
  padding: 2px;
  display: flex;
  color: ${props => (props.color ? props.color : props.theme.colors.white)};
  justify-content: center;
  align-items: center;
  width: 20px;
  font-size: ${props => props.theme.fontSizes.medium};
`;
