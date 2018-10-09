import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import PlaceInput from '../../components/PlaceInput/PlaceInput';

import Action from '../../store/actions';
import generateId from '../../utils/idGenerator';

class SharePlaceScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      place: {
        name: '',
        id: '',
        image: ''
      }
    };
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
    return (
      <View style={styles.container}>
        <PlaceInput
          onAddPlaceName={this.addPlaceHandler}
          onChangePlaceName={this.changePlaceNameHandler}
          placeName={place.name}
        />
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
  onDeletePlace: id => dispatch(Action.onDeletePlace(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SharePlaceScreen);
