import React from 'react';
import { StyleSheet } from 'react-native';

import CustomInput from '../UI/CustomInput/CustomInput';

const PlaceInput = ({ onChangePlaceName, placeName, ...props }) => (
  <CustomInput
    placeholder="An awesome place"
    onChangeText={onChangePlaceName}
    value={placeName}
    style={styles.input}
    {...props}
  />
);

const styles = StyleSheet.create({
  input: {
    width: '100%',
    margin: 8
  }
});

export default PlaceInput;
