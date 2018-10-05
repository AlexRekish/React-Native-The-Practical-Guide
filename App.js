import React, { Component } from 'react';
import { Platform, StyleSheet, Text, TextInput, View, Button } from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
});

export default class App extends Component {
  state = {
    placeName: '',
    places: [],
  };

  changePlaceNameHandler = value => {
    this.setState({ placeName: value });
  };

  addPlaceHandler = () => {
    const { placeName } = this.state;
    if (!placeName) return;
    this.setState(prevState => ({
      places: prevState.places.concat(prevState.placeName),
    }));
  };

  render() {
    const { placeName, places } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.placeInput}
            placeholder="An awesome place"
            onChangeText={this.changePlaceNameHandler}
            value={placeName}
          />
          <Button title="Push me" style={styles.placeButton} onPress={this.addPlaceHandler} />
        </View>
        <View>
          {places.map(place => (
            <Text key={+new Date() + Math.floor(Math.random() * 10000000)}>{place}</Text>
          ))}
        </View>
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
    padding: 30,
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  placeInput: {
    width: '70%',
  },
  placeButton: {
    width: '30%',
  },
});
