import { useEffect, useState } from "react";
import * as Yup from "yup";
import { Users } from "../data/users";
import { saveData } from "../config/storage";
import { useNavigation } from "@react-navigation/native";

export const useLogin = () => {
 
  const initialValues = {
    username: "",
    password: "",
  };

  const navigation = useNavigation()
  const validationSchema = Yup.object().shape({
    username: Yup.string().required("username is required"),
    password: Yup.string().required("password is required"),
  });
  const handleLogin = (values, { resetForm }) => {
    try {
      const {username, password } = values
    const userFound = Users.find(user=>user.username === username)
    console.log({userFound});
    if(userFound && userFound.password === password){
      // saveData(username, true)
      navigation.navigate('Screen2')
      resetForm()
      return
    }
    } catch (error) {
      console.log(error);
    }
  };
  return {
    initialValues,
    validationSchema,
    handleLogin,
  };
};
