import { useState } from "react"

export const useDashboard = () => {
  const handleChange = (text, name) => {
    setDataPet({ ...dataPet, [name]: text })
  }
  const [modalVisible, setModalVisible] = useState(false)
  console.log({modalVisible});
  const openModal = () => {
    setModalVisible(true)
  }

  const closeModal = () => {
    setModalVisible(false)
  }

  const initialValues = {
    name: 'firulais',
    description: '',
    age: 5,
    reference: '',
    specie: 'perro',
    gender: 'male',
    weight: 50,
  }
  const [dataPet, setDataPet] = useState(initialValues)
  return {
    openModal,
    closeModal,
    modalVisible,
    initialValues,
    dataPet,
    handleChange
  }
}
