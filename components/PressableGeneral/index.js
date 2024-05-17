import React from 'react'
import { Pressable, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-elements'
import { Ionicons } from "@expo/vector-icons";


function PressableGeneral({props}) {
    const {
        onPress,
        icon,
      } = props
  return (
    <Pressable onPress={onPress} style={styles.section}>
        <Text style={styles.sectionTitle}>Add Pet</Text>
        <View style={styles.settingRow}>
          <Ionicons name={icon.name} size={icon.size} color={icon.color} />
          <Text style={styles.settingLabel}></Text>
        </View>
      </Pressable>
  )
}
const styles = StyleSheet.create({
    section: {
      backgroundColor: "#fff",
      padding: 20,
      borderRadius: 10,
      marginBottom: 20,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    sectionTitle: {
      color: "#6200ee",
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 10,
    },
    settingRow: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 10,
    },
    settingLabel: {
      fontSize: 16,
    },
  });
export default PressableGeneral