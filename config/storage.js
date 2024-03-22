import AsyncStorage from '@react-native-async-storage/async-storage';

// Guardar un valor
export const saveData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.error('Error al guardar datos:', e);
  }
};

// Obtener un valor
export const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value;
  } catch (e) {
    console.error('Error al obtener datos:', e);
  }
};

