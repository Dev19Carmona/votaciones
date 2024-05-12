import React from 'react'
import { Pressable, View, StyleSheet, ScrollView, Image } from 'react-native'
import { Text } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons'
import { usePetList } from '../../hooks/usePetList'

function PetScreen() {
  const defaultImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYNZVr2VrOzKE6ipdMsmKNO_vHgXyTAIEoKmf80FsRlA&s'
  const {myPets} = usePetList()

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{'My Pets'}</Text>
      </View>
      {
        myPets.map((pet, i)=>(

      <Pressable key={i} onPress={() => {}} style={styles.section}>
        <View style={styles.petContainer}>
          <Image
            source={{ uri: defaultImage }}
            style={styles.petImage}
          />
          <View style={styles.petInfo}>
            <Text style={styles.petName}>{pet.name}</Text>
            <Text style={styles.petSpecies}>{pet.specie}</Text>
          </View>
        </View>
        <View style={styles.settingRow}>
          <Ionicons name="add" size={24} color="#6200ee" />
          <Text style={styles.settingLabel}>No pending</Text>
        </View>
      </Pressable>
        ))
      }
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  header: {
    backgroundColor: '#6200ee',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  headerText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  section: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  sectionTitle: {
    color: '#6200ee',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  settingLabel: {
    fontSize: 16,
  },
  petContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  petImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  petInfo: {
    flex: 1,
  },
  petName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  petSpecies: {
    fontSize: 14,
    color: '#888',
  },
})
export default PetScreen
