import React from 'react'
import { useLogin } from '../../hooks/useLogin'
import LoginForm from '../../components/LoginForm'
import { View } from 'react-native'

const Screen1 = () => {
  const { initialValues, validationSchema, handleLogin } = useLogin()
  

  return (
    <View style={{ flex: 1 }}>
      <LoginForm
        initialValues={initialValues}
        validationSchema={validationSchema}
        handleLogin={handleLogin}
      />
    </View>
  )
}
export default Screen1
