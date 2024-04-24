import React from "react";
import { View } from "react-native";
import RequestAppointmentForm from "../../components/RequestAppointmentForm";
import PetRegisterForm from "../../components/PetRegisterForm";

const RequestAppointmentScreen = ({route}) => {
  const {user} = route.params
  console.log({user});
  return (
    <>
     <View>
      <PetRegisterForm/>
     </View>
    </>
  );
};

export default RequestAppointmentScreen;
