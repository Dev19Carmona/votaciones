import React, { useState } from 'react';
import { View, Text, Button, Modal, TextInput, StyleSheet } from 'react-native';

const PetRegisterForm = ({props}) => {
  const {
    openModal,
    closeModal,
    modalVisible,
    initialValues,
    dataPet,
    handleChange
  } = props
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [age, setAge] = useState('');
  const [reference, setReference] = useState('');
  const [specie, setSpecie] = useState('');
  const [gender, setGender] = useState('');
  const [weight, setWeight] = useState('');
  const [medicalHistory, setMedicalHistory] = useState('');
  const [ownerId, setOwnerId] = useState('');
  const handleSubmit = () => {
    // Aquí puedes enviar los datos del formulario a tu backend o realizar alguna otra acción
    console.log('Nombre:', name);
    console.log('Descripción:', description);
    console.log('Edad:', age);
    console.log('Referencia:', reference);
    console.log('Especie:', specie);
    console.log('Género:', gender);
    console.log('Peso:', weight);
    console.log('Historia Médica:', medicalHistory);
    console.log('ID del Propietario:', ownerId);
    closeModal();
  };

  return (
    <>
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Registrar Mascota</Text>
            <TextInput
              style={styles.input}
              placeholder="Nombre"
              onChangeText={(text) => handleChange(text, 'name')}
              value={dataPet.name}
            />
            <TextInput
              style={styles.input}
              placeholder="Descripción"
              onChangeText={(text) => handleChange(text, 'description')}
              value={dataPet.description}
            />
            <TextInput
              style={styles.input}
              placeholder="Edad"
              onChangeText={setAge}
              value={dataPet.age}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              placeholder="Referencia"
              onChangeText={setReference}
              value={dataPet.reference}
            />
            <TextInput
              style={styles.input}
              placeholder="Especie"
              onChangeText={setSpecie}
              value={dataPet.specie}
            />
            <TextInput
              style={styles.input}
              placeholder="Género"
              onChangeText={setGender}
              value={dataPet.gender}
            />
            <TextInput
              style={styles.input}
              placeholder="Peso"
              onChangeText={setWeight}
              value={dataPet.weight}
              keyboardType="numeric"
            />
            <Button style={styles.buttonStyle} title="Registrar Mascota" onPress={handleSubmit} />
            <Button style={styles.buttonStyle} title="Cancel" onPress={closeModal} />
          </View>
        </View>
      </Modal>

      
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  buttonStyle: {
    margin: '10px',
    padding: '10px',
  }
});

export default PetRegisterForm;