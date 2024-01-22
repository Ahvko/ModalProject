import React, { useState } from 'react';
import { Modal, View, Text, Pressable, StyleSheet } from 'react-native';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.centeredView}>
      <Pressable
        style={styles.showModalButton}
        onPress={() => setModalVisible(true)}
      >
        <Text>Show modal message</Text>
      </Pressable>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text>This is modal...</Text>
            <Pressable
              style={styles.closeButton}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  showModalButton: {
    // Add styling for the button
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  modalView: {
    // Add styling for the modal view
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '100%', // make it full width
  },
  closeButton: {
    // Add styling for the close button
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  }
});