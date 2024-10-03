import React from 'react';
import { View, Text, Button } from 'react-native-ui-lib';
import { StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

interface HomeScreenProps {
  navigation: StackNavigationProp<any, any>;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {

  return (
    <View flex padding-20 style={styles.container}>
      <Text text50>Hello Visitor I'm I Love Shollakhuddin Kurniawan and welcome to my simple personal app</Text>
      <View row spread marginV-20 style={styles.buttonContainer}>
        <Button label="About Me" onPress={() => navigation.navigate('screens/AboutScreen')} marginV-10 margin-5 style={{ borderRadius: 5 }} />
        <Button label="Portfolio" onPress={() => navigation.navigate('screens/PortfolioScreen')} marginV-10 margin-5 style={{ borderRadius: 5 }} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    width: '100%',
    justifyContent: 'flex-start',
  },
});

export default HomeScreen;
