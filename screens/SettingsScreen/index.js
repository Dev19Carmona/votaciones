import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Switch } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StorageAdapter } from '../../config/storage';
import { useNavigation } from '@react-navigation/native';
import { useLogout } from '../../hooks/useLogout';

const SettingsScreen = ({route}) => {
  const {user} = route.params
  const {handleLogout} = useLogout()
  // const navigation = useNavigation();
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(true);
  const [isLocationEnabled, setIsLocationEnabled] = useState(false);

  // const handleLogout = async () => {
  //   await StorageAdapter.removeData('token');
  //   await StorageAdapter.removeData('user');
  //   navigation.navigate('NavigatorManagmentAccountScreen');
  // };


  const toggleNotifications = () => {
    setIsNotificationsEnabled(!isNotificationsEnabled);
  };

  const toggleLocation = () => {
    setIsLocationEnabled(!isLocationEnabled);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Configuración</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Cuenta</Text>
        <View style={styles.settingRow}>
          <Ionicons name="log-out" size={24} color="#6200ee" />
          <Text style={styles.settingLabel} onPress={handleLogout}>
            Cerrar sesión
          </Text>
        </View>
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
  section: {
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
  sectionTitle: {
    color: '#6200ee',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  settingLabel: {
    fontSize: 16,
  },
});

export default SettingsScreen;