import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ListItem = ({ placeName }) => (
  <View style={styles.listItem}>
    <Text style={styles.textStyle}>{placeName}</Text>
  </View>
);

const styles = StyleSheet.create({
  listItem: {
    width: '100%',
    marginBottom: 5,
    padding: 10,
    backgroundColor: '#FF9800'
  },
  textStyle: {
    color: '#1B2325'
  }
});

export default ListItem;
