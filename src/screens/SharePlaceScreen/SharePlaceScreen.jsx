import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import HeadingText from '../../components/UI/HeadingText/HeadingText';
import SharePlaceImage from '../../components/SharePlaceImage/SharePlaceImage';
import SharePlaceMap from '../../components/SharePlaceMap/SharePlaceMap';
import PlaceInput from '../../components/PlaceInput/PlaceInput';
import ButtonWithBackground from '../../components/UI/ButtonWithBackground/ButtonWithBackground';

import Action from '../../store/actions';
import generateId from '../../utils/idGenerator';
import { contextYellow, mainDark } from '../../../colors';

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
      <ScrollView>
        <View style={styles.container}>
          <HeadingText style={styles.headingText}>Share place with us!</HeadingText>
          <SharePlaceImage />
          <SharePlaceMap />
          <PlaceInput onChangePlaceName={this.changePlaceNameHandler} placeName={place.name} />
          <ButtonWithBackground onPress={this.addPlaceHandler} color={contextYellow}>
            Add Place
          </ButtonWithBackground>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: mainDark,
    padding: 30
  },
  headingText: {
    color: contextYellow
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
