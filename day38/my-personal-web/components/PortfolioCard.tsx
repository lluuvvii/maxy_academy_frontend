import { Link } from 'expo-router';
import React from 'react';
import { Linking } from 'react-native';
import { View, Text, Card, Button } from 'react-native-ui-lib';

interface PortfolioCardProps {
  title: string;
  url: string;
  description: string;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ title, url, description }) => {
  const openURL = () => {
    Linking.openURL(url);
  };

  return (
    <Card marginB-20 padding-20>
      <Text text60>{title}</Text>
      <View row spread>
        <Button label="Visit My Website" onPress={openURL} marginV-10 style={{ borderRadius: 5 }} />
      </View>
      <Text text80 marginT-10>{description}</Text>
    </Card>
  );
};

export default PortfolioCard;
