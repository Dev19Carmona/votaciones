import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

const storeApi = (set) => ({
  status: 'unauthenticated',
  token: undefined,
  user: undefined,
  login: (token, user) => {
    set({ status: 'authenticated', token, user })
  },
  logout: () => {
    set({ status: 'unauthenticated', token: undefined, user: undefined })
  },
})
export const useAuthStore = create(
  persist(storeApi, {
    name: 'auth-session',
    storage: createJSONStorage(() => AsyncStorage),
  })
)
