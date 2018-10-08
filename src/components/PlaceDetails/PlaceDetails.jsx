import React, { Component } from 'react';
import { Modal, View, Text, Image, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import Action from '../../store/actions';

class PlaceDetails extends Component {
  state = {};

  render() {
    const { selectedPlace: place, isSelected, onCloseModal, onDeletePlace } = this.props;
    return place ? (
      <Modal visible={isSelected} animationType="slide" onRequestClose={onCloseModal}>
        <View style={styles.placeDetailsStyle}>
          <Image source={place.image} style={styles.imageStyle} />
          <Text style={styles.textStyle}>{place.name}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Delete"
            color="red"
            onPress={() => onDeletePlace(place.id)}
            style={styles.buttonStyle}
          />
          <Button title="Close" onPress={onCloseModal} />
        </View>
      </Modal>
    ) : null;
  }
}

const styles = StyleSheet.create({
  placeDetailsStyle: {
    paddingTop: 30
  },
  imageStyle: {
    width: '100%',
    height: 200,
    marginBottom: 10
  },
  textStyle: {
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 10
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonStyle: {
    marginRight: 10
  }
});

const mapStateToProps = state => ({
  isSelected: state.places.isSelected,
  selectedPlace: state.places.selectedPlace
});

const mapDispatchToProps = dispatch => ({
  onDeletePlace: id => dispatch(Action.onDeletePlace(id)),
  onCloseModal: () => dispatch(Action.onCloseModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaceDetails);
