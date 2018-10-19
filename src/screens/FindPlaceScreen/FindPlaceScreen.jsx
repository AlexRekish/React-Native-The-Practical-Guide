import React, { Component } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';

import ListItems from '../../components/ListItems/ListItems';

import Action from '../../store/actions';
import { mainDark, contextYellow } from '../../../colors';
import { imagesRef } from '../SharePlaceScreen/SharePlaceScreen';

class FindPlaceScreen extends Component {
  constructor(props) {
    super(props);
    const { navigator } = this.props;
    navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  componentDidMount() {
    const { onStartLoadPlaces } = this.props;
    onStartLoadPlaces();
  }

  onNavigatorEvent = evt => {
    const { navigator, onStartLoadPlaces } = this.props;
    if (evt.type === 'NavBarButtonPress' && evt.id === 'sideDrawerToggle')
      navigator.toggleDrawer({
        side: 'left'
      });
    if (evt.id === 'willAppear') {
      onStartLoadPlaces();
    }
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
      },
      navigatorStyle: {
        navBarBackgroundColor: mainDark,
        navBarTextColor: contextYellow,
        navBarButtonColor: contextYellow
      }
    });
  };

  deletePlaceHandler = (id, imageName) => {
    const { onDeletePlace, navigator } = this.props;
    onDeletePlace(id, imageName, imagesRef);
    navigator.pop();
  };

  render() {
    const { places, isLoading } = this.props;
    const content = isLoading ? (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={contextYellow} />
      </View>
    ) : (
      <View style={styles.container}>
        <ListItems places={places} onSelectPlace={this.selectPlaceHandler} />
      </View>
    );
    return places.length ? content : <View style={styles.container} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: mainDark
  }
});

const mapStateToProps = state => ({
  places: state.places.places,
  isLoading: state.ui.isLoading
});

const mapDispatchToProps = dispatch => ({
  onDeletePlace: (id, imageName, ref) => dispatch(Action.onDeletePlaceInit(id, imageName, ref)),
  onStartLoadPlaces: () => dispatch(Action.onStartLoadPlaces())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FindPlaceScreen);
