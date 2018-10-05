import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const PlaceInput = ({ onChangePlaceName, onAddPlaceName, placeName }) => (
  <View style={styles.inputContainer}>
    <TextInput
      style={styles.placeInput}
      placeholder="An awesome place"
      onChangeText={onChangePlaceName}
      value={placeName}
    />
    <Button title="Push me" style={styles.placeButton} onPress={onAddPlaceName} color="#FF9800" />
  </View>
);

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  placeInput: {
    width: '70%'
  },
  placeButton: {
    width: '30%'
  }
});

export default PlaceInput;
