import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Dashboard</Text>
      </View>

      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Ionicons name="people" size={24} color="#fff" />
          <Text style={styles.cardHeaderText}>Usuarios Activos</Text>
        </View>
        <Text style={styles.cardValue}>12,345</Text>
      </View>

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
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  header: {
    backgroundColor: '#6200ee',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  headerText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  cardHeaderText: {
    color: '#6200ee',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  cardValue: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default HomeScreen;