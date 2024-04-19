import { useNavigation } from "@react-navigation/native";
import { StorageAdapter } from "../config/storage";
import { useAuthStore } from "../store";

export const useLogout = () => {
  const navigation = useNavigation();
  const { logout } = useAuthStore((state) => state)
  
  const handleLogout = async () => {
    await StorageAdapter.removeData('token');
    await StorageAdapter.removeData('user');
    logout()
    navigation.navigate('NavigatorManagmentAccountScreen');
  };
  return {
    handleLogout
  }
}