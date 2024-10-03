import React from 'react';
import { View, Text, Button } from 'react-native-ui-lib';
import { StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }: any) => {

  return (
    <View flex padding-20 style={styles.container}>
      <Text text50>Welcome to My Portfolio</Text>
      <Button label="About Me" onPress={() => navigation.navigate('')} marginV-10 />
      <Button label="Portfolio" onPress={() => navigation.navigate('Portfolio', { name: 'portfolio' })} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
