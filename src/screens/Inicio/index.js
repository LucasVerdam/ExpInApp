import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

import { Header } from '../../components/Header';
import { Perfis } from '../../components/Perfis';
import { Convites } from '../../components/Convites';
import { Contatos } from '../../components/Contatos';

import { styles } from './styles';
import { api } from '../../services/api';
import { useAuth } from '../../context/AuthContext';


export function Inicio({ navigation }) {
    const { authData, logado, setLogado } = useAuth();

    async function getPerfil() {
        try {
            const user = await api.get('/perfil/', {
                headers: { 'Authorization': `token ${authData}` }
            })

            console.log(user.data);
            setLogado(user.data)
        } catch (error) {
            console.error(error);
        }

    }

    useEffect(() => {
        getPerfil()
    }, [])

    return (
        <View style={styles.container}>

            <Header nav={navigation} perfil={logado} />

            <View style={styles.inicio}>
                <Perfis nav={navigation} />

                <Convites />

                <Contatos nav={navigation} />
            </View>
        </View>
    );
}