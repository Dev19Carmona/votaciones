import { useState } from 'react'
import { fetchAdapter } from '../config/adapters/fetch.adapter'
import { useNavigation } from '@react-navigation/native'
import { StorageAdapter } from '../config/storage'
import { useAuthStore } from '../store'
import { envs } from '../env'
import { Alert } from 'react-native'

export const useLogin = () => {
  const { login } = useAuthStore((state) => state)

  const initialValues = { email: 'camilocr1294@gmail.com', password: '123456' }
  const [session, setSession] = useState(undefined)
  const [credentials, setCredentials] = useState(initialValues)
  const navigation = useNavigation()
  const handleLogin = async () => {
    fetchAdapter(
      `${envs.DEV_IP}${envs.LOGIN_PATH}`,
      'POST',
      {},
      credentials
    )
      .then(async (session) => {
        setSession(session)
        const { token, user } = session
        login(token, user)
        await StorageAdapter.saveData('token', token)
        await StorageAdapter.saveData('user', JSON.stringify(user))
        setCredentials(initialValues)
        navigation.navigate('NavigatorScreen')
      })
      .catch((err) => {
        console.log({err})
        Alert.alert(
          'Error',
          'Correo electronico o contraseña incorrecto',
          [
            {
              text: 'OK',
              onPress: ()=>console.log('ok'),
              style: 'cancel'
            }
          ]
        )
        return
      })
  }

  const handleChange = (text, name) => {
    setCredentials({ ...credentials, [name]: text })
  }

  return {
    session,
    handleLogin,
    handleChange,
    credentials,
  }
}





