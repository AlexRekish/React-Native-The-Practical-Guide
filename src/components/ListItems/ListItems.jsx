import React, { Component } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import ListItem from './ListItem/ListItem';

class ListItems extends Component {
  state = {};

  _keyExtractor = item => item.id;

  _renderItem = ({ item }) => {
    const { onDeletePlace } = this.props;
    return (
      <ListItem name={item.name} img={item.image} onDeletePlace={() => onDeletePlace(item.id)} />
    );
  };

  render() {
    const { places } = this.props;
    return (
      <FlatList
        style={styles.listItems}
        data={places}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
    );
  }
}

const styles = StyleSheet.create({
  listItems: {
    width: '100%'
  }
});

export default ListItems;
