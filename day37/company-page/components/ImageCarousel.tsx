import React from 'react';
import { View, Image, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const ImageView = () => {
  return (
    <View style={{ width: '100%', height: 200, alignItems: 'center', justifyContent: 'center' }}>
      <Image
        source={require('@/assets/images/innovatetech-logo.png')}
        style={{ width: width, height: 200 }}
        resizeMode="contain"
      />
    </View>
  );
};

export default ImageView;
