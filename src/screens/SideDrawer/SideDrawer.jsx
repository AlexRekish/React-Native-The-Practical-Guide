import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const SideDrawer = () => (
  <View style={styles.sideDrawer}>
    <Text>Side Drawer</Text>
  </View>
);

const styles = StyleSheet.create({
  sideDrawer: {
    width: Dimensions.get('window').width * 0.8,
    paddingTop: 20,
    flex: 1,
    backgroundColor: 'white'
  }
});

export default SideDrawer;
