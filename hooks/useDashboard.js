import { useState } from "react";
import { fetchAdapter } from "../config/adapters/fetch.adapter";
import { envs } from "../env";

export const useDashboard = (token) => {
  const handleChange = (text, name) => {
    setDataPet({ ...dataPet, [name]: text });
  };
  const [modalVisible, setModalVisible] = useState(false);
  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const initialValues = {
    name: "firulais",
    description: "",
    age: "5",
    reference: "",
    specie: "perro",
    gender: "male",
    weight: "50",
  };
  const [dataPet, setDataPet] = useState(initialValues);
  const handleSubmitCreatePet = () => {
    fetchAdapter(
      `${envs.DEV_IP}${envs.REGISTER_PET_PATH}`,
      "POST",
      { Authorization: `Bearer ${token}` },
      dataPet
    );
    closeModal()
    setDataPet(initialValues)
  };
  return {
    openModal,
    closeModal,
    modalVisible,
    initialValues,
    dataPet,
    handleChange,
    handleSubmitCreatePet,
  };
};
