import React, { Component } from 'react';
import T from 'prop-types';
import { Textarea as TextareaStyled } from './Textarea.s';

export default class Textarea extends Component {
  static propTypes = {
    onChange: T.func,
    onFocus: T.func,
    onBlur: T.func,
    value: T.oneOfType([T.string, T.number]),
    name: T.string,
    id: T.string,
    placeholder: T.string,
    readOnly: T.bool,
    rows: T.number,
    cols: T.number,
  };

  static defaultProps = {
    rows: 3,
    cols: 50,
    onChange: () => {},
    onFocus: () => {},
    onBlur: () => {},
    value: '',
    name: '',
    id: '',
    placeholder: '',
    readOnly: false,
  };

  render() {
    const {
      name,
      id,
      onFocus,
      onBlur,
      value,
      placeholder,
      required,
      readOnly,
      rows,
      cols,
      onChange,
    } = this.props;

    return (
      <TextareaStyled
        name={name}
        id={id}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        placeholder={placeholder}
        required={required}
        readOnly={readOnly}
        rows={rows}
        cols={cols}
        value={value}
      />
    );
  }
}
