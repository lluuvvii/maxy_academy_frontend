import React from 'react';
import { View, Text } from 'react-native';
import { Card, Avatar } from 'react-native-ui-lib';

export default function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Card style={{ padding: 20, width: 300, alignItems: 'center' }}>
        <Avatar source={{ uri: 'https://i.pravatar.cc/300' }} size={80} />
        <Text style={{ marginTop: 20, fontSize: 24, fontWeight: 'bold' }}>John Doe</Text>
        <Text style={{ marginTop: 10 }}>Software Engineer & Mobile Developer</Text>
        <Text style={{ marginTop: 10 }}>Passionate about building amazing mobile and web experiences.</Text>
      </Card>
    </View>
  );
}
