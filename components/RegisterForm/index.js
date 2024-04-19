import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const RegisterForm = (props) => {

  const { 
    handleLogin,
    handleChange, 
    credentials
  } = props

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registrarse</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={credentials.name}
        onChangeText={text => handleChange(text, 'name')}
        // onChangeText={setEmail}
        // keyboardType="name"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        value={credentials.email}
        onChangeText={text => handleChange(text, 'email')}
        // onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={credentials.password}
        onChangeText={text => handleChange(text, 'password')}
        secureTextEntry
      />
      <Button title="Registrar" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 50,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default RegisterForm;
