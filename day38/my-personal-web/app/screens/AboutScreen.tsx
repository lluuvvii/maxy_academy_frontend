import React from 'react';
import { View, Text } from 'react-native-ui-lib';

const AboutScreen = () => {
  return (
    <View flex padding-20>
      <Text text40>About Me</Text>
      <Text text70 marginT-10>
        Hi, I'm [Your Name], a passionate developer with expertise in web and mobile development.
      </Text>
    </View>
  );
};

export default AboutScreen;
