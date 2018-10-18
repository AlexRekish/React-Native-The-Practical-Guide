import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import ImagePicker from 'react-native-image-picker';

import ButtonWithBackground from '../UI/ButtonWithBackground/ButtonWithBackground';

import { contextYellow } from '../../../colors';

class SharePlaceImage extends Component {
  state = {
    pickedImage: null
  };

  pickImageHandler = () => {
    const { onPickImage } = this.props;
    const metadata = {
      contentType: 'image/jpeg'
    };
    ImagePicker.showImagePicker({ title: 'Choose an image...' }, res => {
      if (res.didCancel) return;
      if (res.error) return;
      this.setState({ pickedImage: { uri: res.uri } });
      onPickImage({ uri: res.uri, data: res.data, fileName: res.fileName, metadata });
    });
  };

  render() {
    const { pickedImage } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={pickedImage} style={styles.imagePreview} />
        </View>
        <ButtonWithBackground onPress={this.pickImageHandler} color={contextYellow}>
          Pick image
        </ButtonWithBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
    margin: 8
  },
  imageContainer: {
    margin: 10,
    width: '100%',
    height: 200
  },
  imagePreview: {
    width: '100%',
    height: '100%',
    borderRadius: 5
  }
});

export default SharePlaceImage;
