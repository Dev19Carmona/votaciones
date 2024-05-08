import React from "react";
import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useDashboard } from "../../hooks/useDashboard";
import PetRegisterForm from "../../components/PetRegisterForm";

const HomeScreen = ({ route }) => {
  const { user, token } = route.params;
  const {
    openModal,
    closeModal,
    modalVisible,
    dataPet,
    handleChange,
    handleSubmitCreatePet,
  } = useDashboard(token);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{user?.name || "Dashboard"}</Text>
      </View>

      <Pressable onPress={openModal} style={styles.section}>
        <Text style={styles.sectionTitle}>Añadir Mascota</Text>
        <View style={styles.settingRow}>
          <Ionicons name="add" size={24} color="#6200ee" />
          <Text style={styles.settingLabel}></Text>
        </View>
      </Pressable>
      <PetRegisterForm
        props={{
          closeModal,
          modalVisible,
          dataPet,
          handleChange,
          handleSubmitCreatePet,
        }}
      />

      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Ionicons name="cash" size={24} color="#fff" />
          <Text style={styles.cardHeaderText}>Ingresos</Text>
        </View>
        <Text style={styles.cardValue}>$98,765.43</Text>
      </View>

      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Ionicons name="cart" size={24} color="#fff" />
          <Text style={styles.cardHeaderText}>Ventas</Text>
        </View>
        <Text style={styles.cardValue}>7,892</Text>
      </View>

      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Ionicons name="star" size={24} color="#fff" />
          <Text style={styles.cardHeaderText}>Calificación</Text>
        </View>
        <Text style={styles.cardValue}>4.8/5</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    padding: 20,
  },
  header: {
    backgroundColor: "#6200ee",
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  headerText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  cardHeaderText: {
    color: "#6200ee",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
  cardValue: {
    fontSize: 24,
    fontWeight: "bold",
  },
  header: {
    backgroundColor: "#6200ee",
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  headerText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  section: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  sectionTitle: {
    color: "#6200ee",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  settingRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  settingLabel: {
    fontSize: 16,
  },
});

export default HomeScreen;
