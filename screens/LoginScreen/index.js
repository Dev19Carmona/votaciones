// LoginScreen.js
import React, { useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useLogin } from '../../hooks';
import LoginForm from '../../components/LoginForm';

const LoginScreen = () => {
  const { session, handleLogin, handleChange, credentials } = useLogin();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Iniciar sesión</Text>
      </View>
      <LoginForm
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
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  headerText: {
    color: 'black',
    fontSize: 49.5435535,
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

export default LoginScreen;