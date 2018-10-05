import React from 'react';
import { View, StyleSheet } from 'react-native';

import ListItem from './ListItem/Listitem';

const ListItems = ({ places, onDeletePlace }) => (
  <View style={styles.listItems}>
    {places.map(place => (
      <ListItem key={place.id} name={place.name} onDeletePlace={() => onDeletePlace(place.id)} />
    ))}
  </View>
);

const styles = StyleSheet.create({
  listItems: {
    width: '100%'
  }
});
export default ListItems;
