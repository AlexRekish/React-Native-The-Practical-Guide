import React, { Component } from 'react';
import { KeyboardAvoidingView, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import firebase from 'firebase';

import HeadingText from '../../components/UI/HeadingText/HeadingText';
import SharePlaceImage from '../../components/SharePlaceImage/SharePlaceImage';
import PlaceInput from '../../components/PlaceInput/PlaceInput';
import ButtonWithBackground from '../../components/UI/ButtonWithBackground/ButtonWithBackground';

import Action from '../../store/actions';
// import generateId from '../../utils/idGenerator';
import { contextYellow, mainDark } from '../../../colors';

const config = {
  apiKey: 'AIzaSyDTL_zBEIvQS68i70r-iYPcqw6csasmYxw',
  authDomain: 'awesome-places-1539679578843.firebaseapp.com',
  databaseURL: 'https://awesome-places-1539679578843.firebaseio.com',
  projectId: 'awesome-places-1539679578843',
  storageBucket: 'awesome-places-1539679578843.appspot.com',
  messagingSenderId: '814037192746'
};

firebase.initializeApp(config);
const imagesRef = firebase.storage().ref();

class SharePlaceScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      place: {
        name: '',
        id: '',
        image: '',
        touched: false
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
    this.setState(prevState => ({
      place: {
        ...prevState.place,
        name: value,
        id: '',
        touched: true
      }
    }));
  };

  pickImageHandler = image => {
    this.setState(prevState => ({
      place: {
        ...prevState.place,
        image
      }
    }));
  };

  addPlaceHandler = () => {
    const { place } = this.state;
    const { onAddPlaceInit } = this.props;
    if (!place.name) return;
    // const newPlace = {
    //   ...place,
    //   id: generateId(place.name)
    // };
    onAddPlaceInit(place.name, place.image, imagesRef);
  };

  render() {
    const { place } = this.state;
    return (
      <ScrollView style={styles.screen}>
        <KeyboardAvoidingView style={styles.container} behavior="padding">
          <HeadingText style={styles.headingText}>Share place with us!</HeadingText>
          <SharePlaceImage onPickImage={this.pickImageHandler} />
          <PlaceInput
            onChangePlaceName={this.changePlaceNameHandler}
            placeName={place.name}
            valid={place.name}
            touched={place.touched}
          />
          <ButtonWithBackground
            onPress={this.addPlaceHandler}
            color={contextYellow}
            disabled={!place.name || !place.image.uri}
          >
            Add Place
          </ButtonWithBackground>
        </KeyboardAvoidingView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: mainDark
  },
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
  onAddPlaceInit: (name, image, ref) => dispatch(Action.onAddPlaceInit(name, image, ref)),
  onDeletePlace: id => dispatch(Action.onDeletePlace(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SharePlaceScreen);
