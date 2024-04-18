import React, { useState } from 'react'
import { View } from 'react-native'
import { Button } from 'react-native-elements'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { StorageAdapter } from '../../config/storage'
import { useNavigation } from '@react-navigation/native'

const SettingsScreen = () => {
  const navigation = useNavigation()
  const [isPressed, setIsPressed] = useState(false)
  const handleLogout = async () => {
    await StorageAdapter.removeData('token')
    navigation.navigate("NavigationScreen")
  }
  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
  };
  return (
    <>
      <View>
        {/* <Button style={{backgroundColor: 'red'}} title="Logout" onPress={()=> {}} /> */}
        <TouchableOpacity
          style={[styles.button, isPressed && styles.buttonPressed]}
          onPress={handleLogout}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
        >
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#b81414',
    padding: 10,
    borderRadius: 5,
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonPressed: {
    backgroundColor: 'purple', // Color cuando está presionado
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
})
export default SettingsScreen
