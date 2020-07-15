/* eslint-disable no-unused-vars */
import React from 'react';
import {View, Text, TextInput} from 'react-native';

/**
 * define props
 *
 */

const Input = ({
  margin,
  padding,
  value,
  border,
  radius,
  onTextChange,
  secureTextEntry,
  style,
  placeholder,
  fontSize, // fontSize
  ...props
}) => {
  const styleComponent = [
    margin && {margin},
    padding && {padding},
    border && {borderWidth: 1, borderColor: 'gray'},
    radius && {borderRadius: 8},
    fontSize && {fontSize},
    style,
  ];
  return (
    <TextInput
      style={styleComponent}
      value={value}
      placeholder={placeholder}
      onChangeText={onTextChange}
      {...props}
    />
  );
};

export default Input;
