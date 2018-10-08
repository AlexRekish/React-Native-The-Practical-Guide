import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import ListItems from './src/components/ListItems/ListItems';
import PlaceDetails from './src/components/PlaceDetails/PlaceDetails';

import Action from './src/store/actions';
import generateId from './src/utils/idGenerator';

class App extends Component {
  state = {
    place: {
      name: '',
      id: '',
      image: ''
    }
  };

  changePlaceNameHandler = value => {
    this.setState({
      place: {
        name: value,
        id: '',
        image: {
          uri:
            'https://d28g7970w5bq8z.cloudfront.net/ai/288576/aux-head-1525290589-20180502_minsk_3df.by_360.jpg'
        }
      }
    });
  };

  addPlaceHandler = () => {
    const { place } = this.state;
    const { onAddPlace } = this.props;
    if (!place.name) return;
    const newPlace = {
      ...place,
      id: generateId(place.name)
    };
    onAddPlace(newPlace);
  };

  render() {
    const { place } = this.state;
    const { places, onSelectPlace } = this.props;
    return (
      <View style={styles.container}>
        <PlaceDetails />
        <PlaceInput
          placeName={place.name}
          onAddPlaceName={this.addPlaceHandler}
          onChangePlaceName={this.changePlaceNameHandler}
        />
        <ListItems places={places} onSelectPlace={onSelectPlace} />
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

const mapStateToProps = state => ({
  places: state.places.places
});

const mapDispatchToProps = dispatch => ({
  onAddPlace: place => dispatch(Action.onAddPlace(place)),
  onSelectPlace: id => dispatch(Action.onSelectPlace(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
