import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

import { Header } from '../../components/Header';
import { Link } from '../../components/LinkBtn'

import { api } from '../../services/api';
import { useAuth } from '../../context/AuthContext';


export function Contato({ navigation }) {
    const { authData, contato, logado } = useAuth();
    const [perfil, setPerfil] = useState({});


    async function getPerfil() {
        try {
            const user = await api.get(`/perfis/${contato}/`, {
                headers: { 'Authorization': `token ${authData}` }
            })

            console.log(user.data);
            setPerfil(user.data)

            //console.log(perfil);
        } catch (error) {
            console.error(error);
        }

    }

    async function convidar(id) {
        try {
            const conv = await api.post(`/convites/convidar/${id}/`, {
                headers: { 'Authorization': `token ${authData}` }
            }
            )

            console.log(conv.data);

        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        {
            contato != logado.id ?
                getPerfil()
                :
                setPerfil(logado)
        }
    }, [])


    return (
        <View style={styles.container}>
            <Header />

            <View style={styles.perfil}>
                <Text style={styles.nome}>{perfil.nome}</Text>
                <Text style={styles.empr}>{perfil.nome_empresa}</Text>
                <Text style={styles.tel}>{perfil.telefone}</Text>

                <Link texto={perfil.email}></Link>
            </View>

            {contato == logado.id ?

                <View style={styles.connect}>
                    <Text>Seu perfil.</Text>
                </View>

                : perfil.pode_convidar ?

                    <TouchableOpacity
                        onPress={() => { convidar(perfil.id) }}
                        style={styles.connect}
                    >
                        <Text>Convidar!</Text>
                    </TouchableOpacity>

                    :

                    <View style={styles.connect}>
                        <Text>Vocês estão conectados!</Text>
                    </View>
            }

        </View>
    );
}