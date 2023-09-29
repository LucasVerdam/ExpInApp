import React, { useContext, createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";


export const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
    const [authData, setAuth] = useState();
    const [logado, setLogado] = useState();
    const [contato, setContato] = useState();

    async function loadKey() {
        const auth = await AsyncStorage.getItem('@Auth_key')

        if (auth) {
            setAuth(auth)
        }
    }

    useEffect(() => {
        loadKey();
    }, [authData])

    return (
        <AuthContext.Provider value={{ authData, setAuth, contato, setContato, logado, setLogado }}>
            {children}
        </AuthContext.Provider>
    );
}


export function useAuth() {
    const context = useContext(AuthContext)
    return context
}