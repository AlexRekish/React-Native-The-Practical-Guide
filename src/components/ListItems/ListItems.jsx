import React from 'react';
import { View, StyleSheet } from 'react-native';

import ListItem from './ListItem/Listitem';

const ListItems = ({ places }) => (
  <View style={styles.listItems}>
    {places.map(place => (
      <ListItem key={+new Date() + Math.floor(Math.random() * 10000000)} placeName={place} />
    ))}
  </View>
);

const styles = StyleSheet.create({
  listItems: {
    width: '100%'
  }
});
export default ListItems;
