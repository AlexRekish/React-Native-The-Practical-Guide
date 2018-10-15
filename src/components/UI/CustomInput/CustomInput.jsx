import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

import { contextYellow, transparentContextYellow, mainDark } from '../../../../colors';

const CustomInput = props => {
  const { style, valid, touched } = props;
  return (
    <TextInput
      underlineColorAndroid="transparent"
      {...props}
      style={[styles.input, style, !valid && touched ? styles.invalid : null]}
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
  },
  invalid: {
    backgroundColor: 'salmon',
    borderColor: 'red'
  }
});

export default CustomInput;
