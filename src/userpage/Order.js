import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';

const Order = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [query, setQuery] = useState('');

  const handleSubmit = () => {
    // Handle form submission, you can send the data to your backend or perform any action here
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('Query:', query);
    // Reset form fields after submission
    setName('');
    setEmail('');
    setPhone('');
    setQuery('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Apply for Driving Center</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />
      <TextInput
        style={[styles.input, styles.queryInput]}
        placeholder="Address"
        value={query}
        onChangeText={setQuery}
        multiline
        numberOfLines={4}
      />
      <Button title="Apply now" onPress={handleSubmit} color="#1E90FF" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  queryInput: {
    height: 100,
    textAlignVertical: 'top',
  },
});

export default Order;
