export const useTypeLogin = (type, {fetchAdapter,credentials, setSession,login,StorageAdapter, setCredentials, navigation}) =>{
  switch (type) {
    case 'local':
      
      break;
    
    default:
      fetchAdapter(
        'http://10.2.20.119:3000/api/auth/login',
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
          console.log(err)
          return
        })
      break;
  }
}