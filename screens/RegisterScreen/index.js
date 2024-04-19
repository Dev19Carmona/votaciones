// RegisterScreen.js
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import RegisterForm from '../../components/RegisterForm';
import { useRegister } from '../../hooks/useRegister';

const RegisterScreen = () => {
  const { session, handleLogin, handleChange, credentials } = useRegister();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Registrarse</Text>
      </View>
      <RegisterForm
        {...{ handleLogin, handleChange, credentials }}
        style={styles.form}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
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
  form: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default RegisterScreen;