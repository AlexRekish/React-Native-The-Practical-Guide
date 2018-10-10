import React, { Component } from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';

import CustomInput from '../../components/UI/CustomInput/CustomInput';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import ButtonWithBackground from '../../components/UI/ButtonWithBackground/ButtonWithBackground';

import startMainTabs from '../MainTabs/startMainTabs';

import background from '../../assets/img/background.jpg';
import { contextYellow, transparentMainDark } from '../../../colors';

class AuthScreen extends Component {
  state = {};

  loginHandler = () => {
    startMainTabs();
  };

  render() {
    return (
      <ImageBackground style={styles.imageBackground} source={background}>
        <View style={styles.container}>
          <HeadingText style={styles.headingText}>Please log in</HeadingText>
          <View style={styles.inputContainer}>
            <CustomInput placeholder="Your E-mail" />
            <CustomInput placeholder="Your Password" />
            <CustomInput placeholder="Confirm Password" />
          </View>
          <ButtonWithBackground onPress={this.loginHandler} color={contextYellow}>
            Login
          </ButtonWithBackground>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: 30,
    backgroundColor: transparentMainDark
  },
  inputContainer: {
    width: '100%',
    paddingTop: 20,
    paddingBottom: 20
  },
  headingText: {
    color: contextYellow
  }
});

export default AuthScreen;
