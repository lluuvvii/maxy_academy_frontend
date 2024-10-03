import React from 'react';
import { View, Text } from 'react-native-ui-lib';
import PortfolioCard from '../../components/PortfolioCard';

const PortfolioScreen = () => {
  return (
    <View flex padding-20>
      <Text text40 marginB-20>My Portfolio</Text>
      <PortfolioCard title="My Personal web" description="A personal web app built with Next.js" url='https://luvi-kurniawan.vercel.app' />
      <PortfolioCard title="Go Promptopia" description="Prompt AI sources community" url='https://go-promptopia.vercel.app' />
    </View>
  );
};

export default PortfolioScreen;
