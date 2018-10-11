import React, { Component } from 'react';
import { View, StyleSheet, ImageBackground, Dimensions } from 'react-native';

import CustomInput from '../../components/UI/CustomInput/CustomInput';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import ButtonWithBackground from '../../components/UI/ButtonWithBackground/ButtonWithBackground';

import startMainTabs from '../MainTabs/startMainTabs';

import background from '../../assets/img/background.jpg';
import { contextYellow, transparentMainDark } from '../../../colors';

class AuthScreen extends Component {
  constructor(props) {
    super(props);
    Dimensions.addEventListener('change', this.changeOrientationHandler);
    this.state = {
      orientation: Dimensions.get('window').height > 500 ? 'portrait' : 'landscape'
    };
  }

  componentWillUnmount() {
    Dimensions.removeEventListener('change', this.changeOrientationHandler);
  }

  changeOrientationHandler = () => {
    this.setState({
      orientation: Dimensions.get('window').height > 500 ? 'portrait' : 'landscape'
    });
  };

  loginHandler = () => {
    startMainTabs();
  };

  render() {
    const { orientation } = this.state;
    return (
      <ImageBackground style={styles.imageBackground} source={background}>
        <View style={styles.container}>
          {orientation === 'portrait' ? (
            <HeadingText style={styles.headingText}>Please log in</HeadingText>
          ) : null}
          <View style={styles.inputContainer}>
            <CustomInput placeholder="Your E-mail" />
            <View
              style={
                orientation === 'portrait'
                  ? styles.pwContainerPortrait
                  : styles.pwContainerLandscape
              }
            >
              <View style={orientation === 'portrait' ? styles.pwPortrait : styles.pwLandscape}>
                <CustomInput placeholder="Your Password" />
              </View>
              <View style={orientation === 'portrait' ? styles.pwPortrait : styles.pwLandscape}>
                <CustomInput placeholder="Confirm Password" />
              </View>
            </View>
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
  },
  pwContainerPortrait: {
    width: '100%'
  },
  pwContainerLandscape: {
    flexDirection: 'row',
    width: '100%'
  },
  pwPortrait: {
    width: '100%'
  },
  pwLandscape: {
    width: '50%'
  }
});

export default AuthScreen;
