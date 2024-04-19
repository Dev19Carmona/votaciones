import { useState } from "react";
import { fetchAdapter } from "../config/adapters/fetch.adapter";
import { useNavigation } from "@react-navigation/native";
import { StorageAdapter } from "../config/storage";

export const useRegister = () => {
  const [session, setSession] = useState(undefined);
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigation = useNavigation();
  const handleLogin = async () => {
    console.log("entro");
    fetchAdapter(
      "http://192.168.1.2:3000/api/auth/register",
      "POST",
      {},
      credentials
    )
      .then(async (session) => {
        setSession(session);
        console.log(session);
        await StorageAdapter.saveData("token", session.token);
        navigation.navigate("NavigatorScreen");
      })
      .catch((err) => {
        console.log(err);
        return;
      });
  };

  const handleChange = (text, name) => {
    setCredentials({ ...credentials, [name]: text });
  };

  return {
    session,
    handleLogin,
    handleChange,
    credentials,
  };
};
