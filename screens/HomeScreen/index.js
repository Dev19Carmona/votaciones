import React from "react";
import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useDashboard } from "../../hooks/useDashboard";
import PetRegisterForm from "../../components/PetRegisterForm";
import PressableGeneral from "../../components/PressableGeneral";
import { useAuthStore } from "../../store";

const HomeScreen = ({ route }) => {
  const { token } = route.params;
  const user = useAuthStore((state) => state.user)

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
    <PressableGeneral props={{
      onPress:openModal,
      icon: {name: "add", size: 24, color:"#6200ee"}
    }}
    />
      <PetRegisterForm
        props={{
          closeModal,
          modalVisible,
          dataPet,
          handleChange,
          handleSubmitCreatePet,
        }}
      />

      
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
