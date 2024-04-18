import { useState } from 'react'
import { fetchAdapter } from '../config/adapters/fetch.adapter'
import { useNavigation } from '@react-navigation/native'
import { StorageAdapter } from '../config/storage'

export const useLogin = () => {
  const [session, setSession] = useState(undefined)
  const [credentials, setCredentials] = useState({ email: '', password: '' })
  const navigation = useNavigation()
  const handleLogin = async () => {
    if (!session) {
      fetchAdapter(
        'http://10.2.20.119:3000/api/auth/login',
        'POST',
        {},
        credentials
      )
        .then(async (session) => {
          setSession(session)
          await StorageAdapter.saveData('token', session.token)
          navigation.navigate('NavigatorScreen')
        })
        .catch((err) => {
          return
        })
    }
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
