import AsyncStorage from '@react-native-async-storage/async-storage'

export class StorageAdapter {
  static saveData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value)
    } catch (e) {
      console.error('Error al guardar datos:', e)
    }
  }

  static getData = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key)
      return value
    } catch (e) {
      console.error('Error al obtener datos:', e)
    }
  }

  static removeData = async (key) => {
    try {
      await AsyncStorage.removeItem(key)
    } catch (e) {
      console.error('Error al eliminar datos:', e)
    }
  }
}
