import React from "react";
import { View, TextInput, Button, StyleSheet, ImageBackground, Text } from "react-native";
import { Formik } from "formik";

const LoginForm = ({
  initialValues,
  validationSchema,
  handleLogin,
}) => {
  return (
    <View style={styles.container}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleLogin}
      >
        {({ handleBlur, handleChange, handleSubmit, values, resetForm }) => (
          <View style={styles.formik}>
            <TextInput
              style={styles.input}
              placeholder="Username"
              placeholderTextColor='white'
              onChangeText={handleChange("username")}
              value={values.username}
              autoCapitalize="none"
            />

            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor='white'
              onChangeText={handleChange("password")}
              value={values.password}
              autoCapitalize="none"
            />

            <Button title="Iniciar Session" onPress={() => handleSubmit()} />
          </View>
        )}
      </Formik>

    </View>
  );
};

const styles = StyleSheet.create({
  
  formik: {
    padding: 20,
    display: 'flex',
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
    color: 'white',
    borderColor: "gray",
    shadowRadius: 'black',
  },
  container: {
    display: 'flex',
    height: '100%',
    padding: 30,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: "center",
  },
  input: {
    height: 40,
    width: 200,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    color: "white",
  },
});

export default LoginForm;
