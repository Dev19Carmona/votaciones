import React from "react";
import { TouchableOpacity } from "react-native";
const TabBarButton = (props) => {
  const { children, navigation, handleGetMyPets } = props;
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
      onPress={() => {
        handleGetMyPets()
        navigation.navigate('MyPets')
      }}
    >
      {children}
    </TouchableOpacity>
  );
};

export default TabBarButton;
