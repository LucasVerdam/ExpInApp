import AsyncStorage from "@react-native-async-storage/async-storage";


const Token_key = "@Auth_key";

export const getToken = () => AsyncStorage.getItem(Token_key);

