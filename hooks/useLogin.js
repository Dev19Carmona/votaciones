import * as Yup from 'yup'
import { Users } from '../data/users'
import { saveData } from '../config/storage'
import { useNavigation } from '@react-navigation/native'
const navigation = useNavigation()

export const useLogin = () => {
  const initialValues = {
    username: '',
    password: '',
  }

  const validationSchema = Yup.object().shape({
    username: Yup.string().required('username is required'),
    password: Yup.string().required('password is required'),
  })
  const handleLogin = (values = {}, { resetForm }) => {
    try {
      const { username, password } = values
      const userFound = Users.find((user) => user.username === username)
      if (userFound && userFound.password === password) {
        saveData('session', JSON.stringify(userFound))
        navigation.navigate('Screen2')
        resetForm()
        return
      }
    } catch (error) {
      console.log(error)
    }
  }
  return {
    initialValues,
    validationSchema,
    handleLogin,
  }
}
