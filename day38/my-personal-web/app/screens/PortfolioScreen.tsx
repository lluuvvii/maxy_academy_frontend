import React from 'react';
import { View, Text } from 'react-native-ui-lib';
import PortfolioCard from '../../components/PortfolioCard';

const PortfolioScreen = () => {
  return (
    <View flex padding-20>
      <Text text40>My Portfolio</Text>
      <PortfolioCard title="Project 1" description="A mobile app built with React Native" />
      <PortfolioCard title="Project 2" description="A web app built with Next.js" />
    </View>
  );
};

export default PortfolioScreen;
