import { usePetStore } from "../store/my-pets.store"

export const usePetList = () => {
  const myPets = usePetStore((state) => state.myPets)
    return {
        myPets
    }
}