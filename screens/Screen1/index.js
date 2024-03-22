import React from 'react'
import { useLogin } from '../../hooks/useLogin'
import LoginForm from '../../components/LoginForm'
import { Text, View, StyleSheet } from 'react-native'

const Screen1 = () => {
  const {
    initialValues,
    validationSchema,
    handleLogin,
  } = useLogin()
  return (
    <View style={{ flex: 1}}>
      <LoginForm initialValues={initialValues} validationSchema={validationSchema} handleLogin={handleLogin}/>
      <Text style={styles.text}>¡Hola, Mundo!</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: 'red'
  },
});
export default Screen1
