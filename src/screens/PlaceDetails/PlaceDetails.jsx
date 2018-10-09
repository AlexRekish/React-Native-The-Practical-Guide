import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const PlaceDetails = ({ place, onDeletePlace }) => (
  <View style={styles.placeDetailsStyle}>
    <Image source={place.image} style={styles.imageStyle} />
    <Text style={styles.textStyle}>{place.name}</Text>
    <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={() => onDeletePlace(place.id)} style={styles.buttonStyle}>
        <Icon name="md-trash" size={30} color="red" />
      </TouchableOpacity>
    </View>
  </View>
);

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
