import React from "react";
import { View } from "react-native";
import RequestAppointmentForm from "../../components/RequestAppointmentForm";

const RequestAppointmentScreen = ({route}) => {
  const {user} = route.params
  console.log({user});
  return (
    <>
     <View>
      <RequestAppointmentForm/>
     </View>
    </>
  );
};

export default RequestAppointmentScreen;
