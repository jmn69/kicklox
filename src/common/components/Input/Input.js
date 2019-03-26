import React, { Component, Fragment } from 'react';
import T from 'prop-types';
import { Label, Input as InputStyled } from './Input.s';

export default class Input extends Component {
  static propTypes = {
    onChange: T.func,
    onFocus: T.func,
    onBlur: T.func,
    value: T.oneOfType([T.string, T.number]),
    name: T.string,
    id: T.string,
    type: T.string,
    placeholder: T.string,
    readOnly: T.bool,
    label: T.string,
    required: T.bool,
    error: T.any,
    touched: T.bool,
    onClick: T.func,
  };

  static defaultProps = {
    onChange: () => {},
    onFocus: () => {},
    onBlur: () => {},
    onClick: () => {},
    value: '',
    name: '',
    id: '',
    type: 'text',
    placeholder: '',
    readOnly: false,
    label: null,
    required: false,
    error: null,
    touched: false,
  };

  render() {
    const {
      name,
      id,
      type,
      onFocus,
      onBlur,
      value,
      placeholder,
      required,
      error,
      touched,
      readOnly,
      onClick,
      onChange,
    } = this.props;

    return (
      <Fragment>
        {this.renderLabel()}
        <InputStyled
          error={!!error && touched}
          name={name}
          id={id}
          type={type}
          onChange={onChange}
          onFocus={onFocus}
          onClick={onClick}
          onBlur={onBlur}
          value={value}
          placeholder={placeholder}
          required={required}
          readOnly={readOnly}
        />
      </Fragment>
    );
  }

  renderLabel() {
    const { label, required } = this.props;
    let labelRequired = label;
    if (required) {
      labelRequired += '*';
    }
    return label ? <Label>{labelRequired}</Label> : null;
  }
}
