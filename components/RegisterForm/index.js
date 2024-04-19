// RegisterForm.js
import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const RegisterForm = (props) => {
  const { handleLogin, handleChange, credentials } = props;

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={credentials.name}
        onChangeText={(text) => handleChange(text, 'name')}
        autoCapitalize="words"
      />
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        value={credentials.email}
        onChangeText={(text) => handleChange(text, 'email')}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={credentials.password}
        onChangeText={(text) => handleChange(text, 'password')}
        secureTextEntry
      />
      <Button
        style={styles.button}
        title="Registrar"
        onPress={handleLogin}
        color="#6200ee"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    // width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 20,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  button: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default RegisterForm;