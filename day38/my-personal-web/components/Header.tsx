import React from 'react';
import { View, Text } from 'react-native-ui-lib';

const Header = ({ title }: { title: string }) => {
  return (
    <View padding-20 center>
      <Text text40>{title}</Text>
    </View>
  );
};

export default Header;
