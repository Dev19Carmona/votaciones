import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

const storePets = (set) => ({
  isCallGet: false,
  myPets: [],
  createPet: () => {
    // console.log({storePets:myPets})
    set({isCallGet:false})
  },
  getMyPets: (myPets) => {
    set({ myPets, isCallGet:true })
  },
  toggleCallGet: () => {
    set({isCallGet:false})
  }
})

export const usePetStore = create(
  persist(storePets, {
    name: 'my-pets',
    storage: createJSONStorage(() => AsyncStorage),
  })
)
