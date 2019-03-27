import styled from 'styled-components';

export default styled.div`
  position: relative;
  display: flex;
  height: 40px;
  justify-content: ${props =>
    props.justify ? props.justify : 'space-between'};
  align-items: center;
  padding: ${props => (props.padding ? props.padding : '0.75rem 0.5rem;')};
  margin-bottom: -1px;
  background: ${props => (props.active ? 'rgba(53, 205, 147, 0.8)' : 'white')};
  border: 1px solid rgba(0, 0, 0, 0.125);
  cursor: ${props => (props.clickable ? 'pointer' : 'not-allowed')};
  ${props => (props.active ? 'font-weight: 500;' : '')}
  color: ${props => (props.active ? 'black' : props.theme.colors.darkGray)};

  &:hover {
    background: rgba(53, 205, 147, 0.8);
  }
`;
