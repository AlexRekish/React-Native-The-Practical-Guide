import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import ListItems from '../../components/ListItems/ListItems';

import Action from '../../store/actions';

class FindPlaceScreen extends Component {
  constructor(props) {
    super(props);
    const { navigator } = this.props;
    navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  onNavigatorEvent = evt => {
    const { navigator } = this.props;
    if (evt.type === 'NavBarButtonPress' && evt.id === 'sideDrawerToggle')
      navigator.toggleDrawer({
        side: 'left'
      });
  };

  selectPlaceHandler = id => {
    const { places, navigator } = this.props;
    const selectedPlace = places.find(place => place.id === id);
    navigator.push({
      screen: 'awesome-places.PlaceDetailsScreen',
      title: selectedPlace.name,
      passProps: {
        place: selectedPlace,
        onDeletePlace: this.deletePlaceHandler
      }
    });
  };

  deletePlaceHandler = id => {
    const { onDeletePlace, navigator } = this.props;
    onDeletePlace(id);
    navigator.pop();
  };

  render() {
    const { places } = this.props;
    return (
      <View>
        <ListItems places={places} onSelectPlace={this.selectPlaceHandler} />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  places: state.places.places
});

const mapDispatchToProps = dispatch => ({
  onDeletePlace: id => dispatch(Action.onDeletePlace(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FindPlaceScreen);
