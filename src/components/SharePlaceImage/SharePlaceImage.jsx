import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import imagePlaceholder from '../../assets/img/beautiful-place.jpg';
import ButtonWithBackground from '../UI/ButtonWithBackground/ButtonWithBackground';

import { contextYellow } from '../../../colors';

const SharePlaceImage = () => (
  <View style={styles.container}>
    <View style={styles.imageContainer}>
      <Image source={imagePlaceholder} style={styles.imagePreview} />
    </View>
    <ButtonWithBackground onPress={() => {}} color={contextYellow}>
      Pick image
    </ButtonWithBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
    margin: 8
  },
  imageContainer: {
    margin: 10,
    width: '100%',
    height: 200,
    borderWidth: 1,
    borderColor: contextYellow
  },
  imagePreview: {
    width: '100%',
    height: '100%'
  }
});

export default SharePlaceImage;
