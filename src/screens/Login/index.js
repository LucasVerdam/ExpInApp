import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';

import { api } from '../../services/api';
import { useAuth } from '../../context/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';


export function Login({ navigation }) {

    const { setAuth } = useAuth();

    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    async function signIn() {
        try {
            const user = await api.post('/login/', { username, password })
            const token = user.data.token
            AsyncStorage.setItem('@Auth_key', token)

            console.log(token);

            setAuth(token)

        } catch (error) {
            console.log(error);
        }


    }

    return (

        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Login</Text>

                <TextInput
                    style={styles.input}
                    placeholder='Nome'
                    onChangeText={setUsername}
                />

                <TextInput
                    style={styles.input}
                    placeholder='Senha'
                    secureTextEntry
                    onChangeText={setPassword}
                />

                <TouchableOpacity
                    style={styles.btn}
                    onPress={signIn}
                >
                    <Text style={styles.btnTxt}>
                        Login
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('Cadastro')}
                >
                    <Text style={styles.register}>
                        registre-se
                    </Text>
                </TouchableOpacity>

                {/* <Text>{username}: {password}</Text> */}

            </View>
        </View>

    );
}