import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { mainDark, contextYellow } from '../../../colors';

const SideDrawer = () => (
  <View style={styles.sideDrawer}>
    <TouchableOpacity onPress={() => {}}>
      <View style={styles.buttonContainer}>
        <Text style={styles.text}>Sign out</Text>
        <Icon name="md-log-out" size={30} color={contextYellow} style={styles.icon} />
      </View>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  sideDrawer: {
    width: Dimensions.get('window').width * 0.8,
    padding: 30,
    flex: 1,
    backgroundColor: mainDark
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10
  },
  text: {
    width: '70%',
    fontSize: 24,
    color: contextYellow
  },
  icon: {
    width: '30%'
  }
});

export default SideDrawer;
