import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

import { mainDark } from '../../../../colors';

const ButtonWithBackground = props => {
  const { children, color, onPress } = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container, { backgroundColor: color }]}>
        <Text style={styles.text}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    margin: 8
  },
  text: {
    fontSize: 16,
    color: mainDark
  }
});

export default ButtonWithBackground;
