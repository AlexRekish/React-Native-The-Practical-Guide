import React, { Component } from 'react';
import { View, StyleSheet, ImageBackground, Dimensions, KeyboardAvoidingView } from 'react-native';

import CustomInput from '../../components/UI/CustomInput/CustomInput';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import ButtonWithBackground from '../../components/UI/ButtonWithBackground/ButtonWithBackground';

import startMainTabs from '../MainTabs/startMainTabs';

import background from '../../assets/img/background.jpg';
import { contextYellow, transparentMainDark } from '../../../colors';
import validate from '../../utils/validation';

class AuthScreen extends Component {
  constructor(props) {
    super(props);
    Dimensions.addEventListener('change', this.changeOrientationHandler);
    this.state = {
      orientation: Dimensions.get('window').height > 500 ? 'portrait' : 'landscape',
      authMode: 'login',
      controls: {
        email: {
          value: '',
          valid: false,
          validityRules: {
            isEmail: true
          },
          touched: false
        },
        password: {
          value: '',
          valid: false,
          validityRules: {
            minLength: 6
          },
          touched: false
        },
        confirmPassword: {
          value: '',
          valid: false,
          validityRules: {
            equalTo: 'password'
          },
          touched: false
        }
      }
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

  changeAuthModeHandler = () => {
    this.setState(prevState => ({
      authMode: prevState.authMode === 'login' ? 'register' : 'login'
    }));
  };

  changeTextHandler = (key, value) => {
    this.setState(prevState => {
      const connectedVal = prevState.controls.password.value;
      return key === 'password'
        ? {
            controls: {
              ...prevState.controls,
              [key]: {
                ...prevState.controls[key],
                value,
                valid: validate(value, prevState.controls[key].validityRules, connectedVal),
                touched: true
              },
              confirmPassword: {
                ...prevState.controls.confirmPassword,
                valid: validate(
                  prevState.controls.confirmPassword.value,
                  prevState.controls.confirmPassword.validityRules,
                  value
                )
              }
            }
          }
        : {
            controls: {
              ...prevState.controls,
              [key]: {
                ...prevState.controls[key],
                value,
                valid: validate(value, prevState.controls[key].validityRules, connectedVal),
                touched: true
              }
            }
          };
    });
  };

  render() {
    const { orientation, controls, authMode } = this.state;
    return (
      <ImageBackground style={styles.imageBackground} source={background}>
        <KeyboardAvoidingView style={styles.container} behavior="padding">
          {orientation === 'portrait' ? (
            <HeadingText style={styles.headingText}>
              {authMode === 'login' ? 'Please sign in' : 'Please sign up'}
            </HeadingText>
          ) : null}
          <View style={styles.inputContainer}>
            <CustomInput
              placeholder="Your E-mail"
              value={controls.email.value}
              onChangeText={value => this.changeTextHandler('email', value)}
              valid={controls.email.valid}
              touched={controls.email.touched}
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
            />
            <View
              style={
                orientation === 'portrait'
                  ? styles.pwContainerPortrait
                  : styles.pwContainerLandscape
              }
            >
              <View
                style={
                  orientation === 'landscape' && authMode !== 'login'
                    ? styles.pwLandscape
                    : styles.pwPortrait
                }
              >
                <CustomInput
                  placeholder="Your Password"
                  value={controls.password.value}
                  onChangeText={value => this.changeTextHandler('password', value)}
                  valid={controls.password.valid}
                  touched={controls.password.touched}
                  secureTextEntry
                  autoCapitalize="none"
                />
              </View>
              {authMode !== 'login' ? (
                <View style={orientation === 'portrait' ? styles.pwPortrait : styles.pwLandscape}>
                  <CustomInput
                    placeholder="Confirm Password"
                    value={controls.confirmPassword.value}
                    onChangeText={value => this.changeTextHandler('confirmPassword', value)}
                    valid={controls.confirmPassword.valid}
                    touched={controls.confirmPassword.touched}
                    secureTextEntry
                    autoCapitalize="none"
                  />
                </View>
              ) : null}
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <ButtonWithBackground
              onPress={this.loginHandler}
              color={contextYellow}
              disabled={
                authMode !== 'login'
                  ? !controls.email.valid ||
                    !controls.password.valid ||
                    !controls.confirmPassword.valid
                  : !controls.email.valid || !controls.password.valid
              }
            >
              Confirm
            </ButtonWithBackground>
            <ButtonWithBackground onPress={this.changeAuthModeHandler} color={contextYellow}>
              {authMode === 'login' ? 'Register' : 'Login'}
            </ButtonWithBackground>
          </View>
        </KeyboardAvoidingView>
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
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
});

export default AuthScreen;
