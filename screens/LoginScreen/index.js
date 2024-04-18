import React, { useEffect } from 'react'
import { View } from 'react-native'
import { useLogin } from '../../hooks'
import LoginForm from '../../components/LoginForm'


const LoginScreen = () => {
  const { session, handleLogin, handleChange, credentials } = useLogin()

  return (
    <>
      <View>
        <LoginForm
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

export default LoginScreen
