import React from 'react';
import { View, Image, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const images = [
  { uri: 'https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-1024.png' },
  // Anda dapat menambahkan lebih banyak gambar di sini jika diperlukan.
];

const ImageView = () => {
  return (
    <View style={{ width: '100%', height: 200, alignItems: 'center', justifyContent: 'center' }}>
      {images.map((image, index) => (
        <Image
          key={index}
          source={{ uri: image.uri }}
          style={{ width: width, height: 200 }}
          resizeMode="contain"
        />
      ))}
    </View>
  );
};

export default ImageView;
