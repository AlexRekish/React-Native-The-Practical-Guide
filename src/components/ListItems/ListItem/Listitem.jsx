import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ListItem = ({ name, onDeletePlace }) => (
  <TouchableOpacity onPress={onDeletePlace}>
    <View style={styles.listItem}>
      <Text style={styles.textStyle}>{name}</Text>
    </View>
  </TouchableOpacity>
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
