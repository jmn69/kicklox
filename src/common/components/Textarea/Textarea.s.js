import styled from 'styled-components';
import T from 'prop-types';

const Textarea = styled.textarea`
  border-radius: 8px;
  border: 1px solid
    ${props =>
      props.error ? props.theme.colors.error : 'rgba(0, 0, 0, 0.125)'};
  color: ${props =>
    props.readOnly
      ? props.theme.colors.lightGray
      : props.theme.colors.darkGray};
  font-size: ${props => props.theme.fontSizes.medium};
  outline: none;
  width: 100%;
  resize: vertical;
  padding: 5px;
  box-sizing: border-box;
  transition: border-color 375ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    color 375ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  &:required {
    box-shadow: none;
  }

  &:focus {
    border-color: ${props => props.theme.colors.accent};
  }

  &:placeholder {
    opacity: 1;
    color: ${props => props.theme.colors.lightGray};
  }
  &:-webkit-input-placeholder {
    opacity: 1;
    color: ${props => props.theme.colors.lightGray};
  }

  &:-moz-placeholder {
    opacity: 1;
    color: ${props => props.theme.colors.lightGray};
  }

  &:ms-input-placholder {
    opacity: 1;
    color: ${props => props.theme.colors.lightGray};
  }
`;
Textarea.propTypes = {
  error: T.bool,
  readOnly: T.bool,
};

export { Textarea };
