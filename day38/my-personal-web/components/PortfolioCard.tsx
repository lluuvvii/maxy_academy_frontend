import React from 'react';
import { View, Text, Card } from 'react-native-ui-lib';

interface PortfolioCardProps {
  title: string;
  description: string;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ title, description }) => {
  return (
    <Card marginB-20 padding-20>
      <Text text60>{title}</Text>
      <Text text80 marginT-10>{description}</Text>
    </Card>
  );
};

export default PortfolioCard;
