import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import ButtonWithBackground from '../UI/ButtonWithBackground/ButtonWithBackground';

import { contextYellow } from '../../../colors';

const SharePlaceMap = () => (
  <View style={styles.container}>
    <View style={styles.mapContainer}>
      <Text>Share map</Text>
    </View>
    <ButtonWithBackground onPress={() => {}} color={contextYellow}>
      Locate me
    </ButtonWithBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
    margin: 8
  },
  mapContainer: {
    margin: 10,
    width: '100%',
    height: 200,
    borderWidth: 1,
    borderColor: contextYellow
  }
});

export default SharePlaceMap;
