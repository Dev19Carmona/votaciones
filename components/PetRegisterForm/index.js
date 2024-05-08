import React, { useState } from "react";
import { View, Text, Button, Modal, TextInput, StyleSheet } from "react-native";

const PetRegisterForm = ({ props }) => {
  const {
    closeModal,
    modalVisible,
    dataPet,
    handleChange,
    handleSubmitCreatePet
  } = props;

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
              <Text style={styles.label}>Nombre:</Text>
              <TextInput
                style={styles.input}
                placeholder="Nombre"
                onChangeText={(text) => handleChange(text, "name")}
                value={dataPet.name}
              />
              <Text style={styles.label}>Descripción:</Text>
              <TextInput
                style={styles.input}
                placeholder="Descripción"
                onChangeText={(text) => handleChange(text, "description")}
                value={dataPet.description}
              />
              <Text style={styles.label}>Edad:</Text>
              <TextInput
                style={styles.input}
                placeholder="Edad"
                onChangeText={(text) => handleChange(parseFloat(text), "age")}
                value={dataPet.age}
                keyboardType="numeric"
              />
              <Text style={styles.label}>Referencia:</Text>
              <TextInput
                style={styles.input}
                placeholder="Referencia"
                onChangeText={(text) => handleChange(text, "reference")}
                value={dataPet.reference}
              />
              <Text style={styles.label}>Especie:</Text>
              <TextInput
                style={styles.input}
                placeholder="Especie"
                onChangeText={(text) => handleChange(text, "specie")}
                value={dataPet.specie}
              />
              <Text style={styles.label}>Género:</Text>
              <TextInput
                style={styles.input}
                placeholder="Género"
                onChangeText={(text) => handleChange(text, "gender")}
                value={dataPet.gender}
              />
              <Text style={styles.label}>Peso:</Text>
              <TextInput
                style={styles.input}
                placeholder="Peso"
                onChangeText={(text) =>
                  handleChange(parseFloat(text), "weight")
                }
                value={dataPet.weight}
                keyboardType="numeric"
              />
              <View style={styles.viewButtons}>
                <Button
                  style={styles.buttonStyleSubmit}
                  title="Registrar Mascota"
                  onPress={handleSubmitCreatePet}
                />
                <Button
                  style={styles.buttonStyleCancel}
                  title="Cancel"
                  onPress={closeModal}
                />
              </View>
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
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  buttonStyleSubmit: {
    margin: "10px",
    padding: "10px",
  },
  buttonStyleCancel: {
    margin: "10px",
    padding: "10px",
    backgroundColor: "red",
  },
  viewButtons:{
    gap: 10,
  }
});

export default PetRegisterForm;