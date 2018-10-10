import React from 'react';
import { Text, StyleSheet } from 'react-native';

const HeadingText = props => {
  const { style, children } = props;
  return (
    <Text {...props} style={[styles.h1, style]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  h1: {
    fontSize: 28,
    fontWeight: 'bold'
  }
});

export default HeadingText;
