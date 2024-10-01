import React, { useEffect, useState } from 'react';
import { View, Text, Button, Modal, TextField, Card } from 'react-native-ui-lib';
import { ScrollView } from 'react-native';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ServiceCard from '../../components/ServiceCard';
import ImageCarousel from '../../components/ImageCarousel';

const services = [
  {
    title: 'Software Development',
    description: 'Custom software development tailored to your business needs.',
    image: require('../../assets/images/software-development.jpg'), // Use require for images
  },
  {
    title: 'AI Solutions',
    description: 'Integrating AI to automate and optimize your business processes.',
    image: require('../../assets/images/ai-solutions.jpg'),
  },
  {
    title: 'IT Consulting',
    description: 'Expert advice to guide your IT strategy and infrastructure.',
    image: require('../../assets/images/it-consulting.jpg'),
  },
  {
    title: 'Cloud Services',
    description: 'Reliable and scalable cloud solutions to power your business.',
    image: require('../../assets/images/cloud-services.jpg'),
  },
];

const Home = () => {
  const [isClient, setIsClient] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleFormChange = (field: any, value: any) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    console.log('Form Data:', formData);
    // Reset form and close modal
    setFormData({ name: '', email: '', message: '' });
    setIsModalVisible(false);
  };

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

        {isClient && <ImageCarousel />}

        <Text text50 marginV-20>Our Services</Text>

        {services?.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            image={service.image}
          />
        ))}

        <Button label="Contact Us" marginV-20 onPress={() => setIsModalVisible(true)} />

        <Modal
          visible={isModalVisible}
          onDismiss={() => setIsModalVisible(false)}
          animationType="slide"
          transparent={true}
        >
          <View flex center padding-20>
            <Card padding-20 style={{ width: '90%', backgroundColor: 'white' }}>
              <Text text50 marginB-20 center>Contact Us</Text>

              {/* Form Input */}
              <TextField
                placeholder="Your Name"
                value={formData.name}
                onChangeText={(text) => handleFormChange('name', text)}
                floatingPlaceholder
                marginB-15
              />
              <TextField
                placeholder="Your Email"
                value={formData.email}
                onChangeText={(text) => handleFormChange('email', text)}
                keyboardType="email-address"
                floatingPlaceholder
                marginB-15
              />
              <TextField
                placeholder="Your Message"
                value={formData.message}
                onChangeText={(text) => handleFormChange('message', text)}
                multiline
                floatingPlaceholder
                marginB-20
              />

              {/* Tombol untuk submit */}
              <Button label="Submit" onPress={handleSubmit} />
              <Button label="Cancel" marginT-10 link onPress={() => setIsModalVisible(false)} />
            </Card>
          </View>
        </Modal>
      </View>
      <Footer />
    </ScrollView>
  );
};

export default Home;
