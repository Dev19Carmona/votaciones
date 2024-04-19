import React, { useEffect } from 'react'
import { View } from 'react-native'
import RegisterForm from '../../components/RegisterForm'
import { useRegister } from '../../hooks/useRegister'


const RegisterScreen = () => {
  const { session, handleLogin, handleChange, credentials } = useRegister()

  return (
    <>
      <View>
        <RegisterForm
          {...{ 
            handleLogin,
            handleChange,
            credentials
          }}
        />
      </View>
    </>
  )
}

export default RegisterScreen
