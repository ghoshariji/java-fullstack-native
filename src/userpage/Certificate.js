import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Modal, TouchableOpacity } from 'react-native';

const Certificate = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleShowCertificate = () => {
    setModalVisible(true);
  };

  const handleCloseCertificate = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.certificateContainer}>
        <Text style={styles.title}>Driving Certificate</Text>
        <View style={styles.details}>
          <Text style={styles.text}>This is to certify that</Text>
          <Text style={styles.name}>John Doe</Text>
          <Text style={styles.text}>has successfully completed the driving course</Text>
          <Text style={styles.date}>Date: 01/01/2024</Text>
        </View>
      </View>
      <Button title="View Certificate" onPress={handleShowCertificate} color="#1E90FF" />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleCloseCertificate}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Driving Certificate</Text>
            <View style={styles.modalDetails}>
              <Text style={styles.modalText}>This is to certify that</Text>
              <Text style={styles.modalName}>John Doe</Text>
              <Text style={styles.modalText}>has successfully completed the driving course</Text>
              <Text style={styles.modalDate}>Date: 01/01/2024</Text>
            </View>
            <TouchableOpacity style={styles.closeButton} onPress={handleCloseCertificate}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  certificateContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  details: {
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    marginBottom: 5,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  date: {
    fontSize: 16,
    marginTop: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalDetails: {
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 5,
  },
  modalName: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  modalDate: {
    fontSize: 16,
    marginTop: 10,
  },
  closeButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#1E90FF',
    borderRadius: 5,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Certificate;
