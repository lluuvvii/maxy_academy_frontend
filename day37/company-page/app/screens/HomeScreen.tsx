import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native-ui-lib';
import { ScrollView } from 'react-native';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ServiceCard from '../../components/ServiceCard';
import ImageCarousel from '../../components/ImageCarousel';

const services = [
  {
    title: 'Software Development',
    description: 'Custom software development tailored to your business needs.',
    image: 'https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-1024.png'
  },
  {
    title: 'AI Solutions',
    description: 'Integrating AI to automate and optimize your business processes.',
    image: 'https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-1024.png'
  },
  {
    title: 'IT Consulting',
    description: 'Expert advice to guide your IT strategy and infrastructure.',
    image: 'https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-1024.png'
  },
  {
    title: 'Cloud Services',
    description: 'Reliable and scalable cloud solutions to power your business.',
    image: 'https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-1024.png'
  },
];

const Home = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <ScrollView>
      <Header />
      <View flex center paddingH-20>

        <Text text40 marginB-20 marginT-20>Welcome to InnovateTech</Text>

        <Text text70 marginB-20 center>
          Innovating the Future through Technology
        </Text>

        {/* <ImageCarousel /> */}
        {isClient && <ImageCarousel />}

        <Text text50 marginV-20>Our Services</Text>

        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            image={service.image}
          />
        ))}

        <Button label="Contact Us" marginV-20 onPress={() => console.log('Navigate to Contact Page')} />
      </View>
      <Footer />
    </ScrollView>
  );
};

export default Home;
