import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from './styles';

import { api } from '../../services/api';

export function Cadastro({ navigation }) {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [phone, setPhone] = useState();
    const [companyName, setCompanyName] = useState();

    async function register() {

        try {
            const user = await api.post('/perfis/', {
                nome: name,
                email: email,
                nome_empresa: companyName,
                telefone: phone,
                senha: password
            })
            console.log(user.data);

            navigation.navigate('Login')
        } catch (error) {
            console.log(error);
        }
    }



    return (

        <View style={styles.container}>

            <ScrollView>
                <Text style={styles.title}>Crie seu usuário</Text>

                <TextInput
                    style={styles.input}
                    placeholder='Email *'
                    keyboardType='email-address'
                    onChangeText={setEmail}
                />

                <TextInput
                    style={styles.input}
                    placeholder='Nome *'
                    onChangeText={setName}
                />

                <TextInput
                    style={styles.input}
                    placeholder='Senha *'
                    secureTextEntry
                    onChangeText={setPassword}
                />

                <View style={{ marginTop: 15 }}>

                    <TextInput
                        style={styles.input}
                        placeholder='Telefone'
                        maxLength={9}
                        keyboardType='numeric'
                        onChangeText={setPhone}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder='Empresa'
                        onChangeText={setCompanyName}
                    />

                </View>

                <TouchableOpacity
                    style={styles.btn}
                    onPress={register}
                >
                    <Text style={styles.btnTxt}>
                        Registrar
                    </Text>
                </TouchableOpacity>

                {/* <Text style={{ textAlign: 'center' }}>{email} : {name} : {password} : {phone} : {companyName}</Text> */}

            </ScrollView>
        </View>

    );
}