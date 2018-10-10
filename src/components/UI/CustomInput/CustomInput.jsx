import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

import { contextYellow, transparentContextYellow, mainDark } from '../../../../colors';

const CustomInput = props => {
  const { style } = props;
  return (
    <TextInput
      underlineColorAndroid="transparent"
      {...props}
      style={[styles.input, style]}
      placeholderTextColor={mainDark}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: transparentContextYellow,
    borderWidth: 3,
    borderColor: contextYellow,
    borderRadius: 5,
    padding: 5,
    margin: 8,
    color: mainDark
  }
});

export default CustomInput;
