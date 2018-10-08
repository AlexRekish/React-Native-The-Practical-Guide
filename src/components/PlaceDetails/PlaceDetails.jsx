import React from 'react';
import { Modal, View, Text, Image, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const PlaceDetails = ({ place, visible, onCloseModal, onDeletePlace }) =>
  place ? (
    <Modal visible={visible} animationType="slide" onRequestClose={onCloseModal}>
      <View style={styles.placeDetailsStyle}>
        <Image source={place.image} style={styles.imageStyle} />
        <Text style={styles.textStyle}>{place.name}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => onDeletePlace(place.id)} style={styles.buttonStyle}>
          <Icon name="ios-trash" size={30} color="red" />
        </TouchableOpacity>
        <Button title="Close" onPress={onCloseModal} />
      </View>
    </Modal>
  ) : null;

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

export default PlaceDetails;
