import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import ListItems from './src/components/ListItems/ListItems';

export default class App extends Component {
  state = {
    placeName: '',
    places: []
  };

  changePlaceNameHandler = value => {
    this.setState({ placeName: value });
  };

  addPlaceHandler = () => {
    const { placeName } = this.state;
    if (!placeName) return;
    this.setState(prevState => ({
      places: prevState.places.concat(prevState.placeName)
    }));
  };

  render() {
    const { placeName, places } = this.state;
    return (
      <View style={styles.container}>
        <PlaceInput
          placeName={placeName}
          onAddPlaceName={this.addPlaceHandler}
          onChangePlaceName={this.changePlaceNameHandler}
        />
        <ListItems places={places} />
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
