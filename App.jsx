import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import ListItems from './src/components/ListItems/ListItems';

export default class App extends Component {
  state = {
    place: {
      name: '',
      id: ''
    },
    places: []
  };

  changePlaceNameHandler = value => {
    this.setState({
      place: {
        name: value,
        id: ''
      }
    });
  };

  getPlaceId = name => name + +new Date() + Math.floor(Math.random() * 10000000);

  addPlaceHandler = () => {
    const { place } = this.state;
    if (!place.name) return;
    this.setState(prevState => ({
      places: prevState.places.concat({
        ...prevState.place,
        id: this.getPlaceId(prevState.place.name)
      })
    }));
  };

  deletePlaceHandler = id => {
    this.setState(prevState => ({
      places: prevState.places.filter(place => place.id !== id)
    }));
  };

  render() {
    const { place, places } = this.state;
    return (
      <View style={styles.container}>
        <PlaceInput
          placeName={place.name}
          onAddPlaceName={this.addPlaceHandler}
          onChangePlaceName={this.changePlaceNameHandler}
        />
        <ListItems places={places} onDeletePlace={this.deletePlaceHandler} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 30
  }
});
