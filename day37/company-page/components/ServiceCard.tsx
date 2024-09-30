import React from 'react';
import { View, Text, Card, Image } from 'react-native-ui-lib';

type ServiceCardProps = {
  title: string;
  description: string;
  image: string;
};

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, image }) => {
  return (
    <Card marginV-15 padding-20>
      <View row>
        <Image source={{ uri: image }} style={{ width: 80, height: 80, marginRight: 15 }} />
        <View>
          <Text text60>{title}</Text>
          <Text text80 grey10>{description}</Text>
        </View>
      </View>
    </Card>
  );
};

export default ServiceCard;
