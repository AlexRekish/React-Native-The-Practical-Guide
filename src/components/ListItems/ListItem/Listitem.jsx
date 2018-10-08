import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const ListItem = ({ name, img, onSelectPlace }) => (
  <TouchableOpacity onPress={onSelectPlace}>
    <View style={styles.listItem}>
      <Image source={img} style={styles.imageStyle} />
      <Text style={styles.textStyle}>{name}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 5,
    padding: 5,
    backgroundColor: '#FF9800'
  },
  textStyle: {
    color: '#1B2325',
    fontSize: 18
  },
  imageStyle: {
    width: 30,
    height: 30,
    marginRight: 10
  }
});

export default ListItem;
