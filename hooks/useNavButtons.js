import { Alert } from "react-native"
import { fetchAdapter } from "../config/adapters/fetch.adapter"
import { envs } from "../env"
import { useAuthStore } from "../store"
import { usePetStore } from "../store/my-pets.store"

export const useNavButtons = () => {
    const token = useAuthStore((state) => state.token)
  const getMyPets = usePetStore((state) => state.getMyPets)
  const isCallGet = usePetStore((state) => state.isCallGet)
    
    const handleGetMyPets = () => {
      if(!isCallGet){
        fetchAdapter(`${envs.DEV_IP}${envs.MY_PETS_PATH}`,'GET', {},'',token)
        .then(async (myPets) => {
          console.log({myPets});
          getMyPets(myPets)
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
          
    }
    return {
        handleGetMyPets
    }
}