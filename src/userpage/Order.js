import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, ActivityIndicator } from 'react-native';
import { addDriver } from '../api/driveAuth';
import CustomToast from '../componets/Customtoast';
const Order = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [toast, setToast] = useState(false)
  const [loading, setLoading] = useState(false)
  const [toastmesg, setToastMesg] = useState(null)

  const handleSubmit = async (e) => {
    setLoading(true)
    e.preventDefault()
    try {
      const data = await addDriver({ name, email, phone, address })
      setLoading(false)
      setToastMesg("Application Submitted");
      setToast(true)
    } catch (error) {
      setLoading(false)
      setToastMesg("Something went Wrong");
      setToast(true)
    }
    setName('');
    setEmail('');
    setPhone('');
    setAddress('');
  };

  return (
    <View style={styles.container}>
      {loading && (
        <View style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <ActivityIndicator size="large" color="black" />
        </View>
      )}

      <CustomToast visible={toast} message={toastmesg} onHide={() => hideToast()} />
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
        value={address}
        onChangeText={setAddress}
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
