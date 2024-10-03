import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { Card } from 'react-native-ui-lib';

export default function ProjectScreen() {
  const projects = [
    { title: 'E-commerce App', description: 'A complete e-commerce solution with React Native.' },
    { title: 'Social Media App', description: 'A simple social media platform with chat and posting features.' },
    { title: 'Portfolio Website', description: 'A portfolio website with animations and smooth transitions.' },
  ];

  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      {projects.map((project, index) => (
        <Card key={index} style={{ padding: 20, marginBottom: 20 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{project.title}</Text>
          <Text style={{ marginTop: 10 }}>{project.description}</Text>
        </Card>
      ))}
    </ScrollView>
  );
}
