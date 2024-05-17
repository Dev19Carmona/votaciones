import { useEffect, useState } from "react"
import { fetchAdapter } from "../config/adapters/fetch.adapter"
import { envs } from "../env"
import { useAuthStore } from "../store"
import { usePetStore } from "../store/my-pets.store"

export const usePetList = () => {
  const token = useAuthStore((state) => state.token)
  const myPets = usePetStore((state) => state.myPets)
  const isCallGet = usePetStore((state) => state.isCallGet)
  const toggleCallGet = usePetStore((state) => state.toggleCallGet)
  console.log({isCallGet});
  const [pets, setPets] = useState(myPets)
  const handleDelete = (id) => {
    const url = `${envs.DEV_IP}${envs.DELETE_PET_PATH}${id}`
    fetchAdapter(
      url,
      'PUT',
      null,
      null,
      token
    )
    .then(async (pet) => {
      const updatedPets = pets.filter(p => p.id !== pet.id)
      console.log({updatedPets});
      setPets(updatedPets)
      toggleCallGet()
    })
    .catch(err=>{
      console.log({err});
    })
  }
    return {
        myPets:pets,
        handleDelete
    }
}