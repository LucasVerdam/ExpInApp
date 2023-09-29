import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';

import { styles } from './styles';
import { themes } from '../../global/styles/themes';

import { api } from '../../services/api';
import { useAuth } from '../../context/AuthContext';

export function Convites(props) {
    const { authData } = useAuth();
    const [convites, setConvites] = useState([]);


    async function getConvites() {
        try {
            const conv = await api.get('/convites/', {
                headers: { 'Authorization': `token ${authData}` }
            })

            console.log(conv.data);
            setConvites(conv.data);

        } catch (error) {
            console.error(error);
        }

    }

    async function aceitar(id) {
        try {
            const cont = await api.post(`/convites/aceitar/${id}/`)

            console.log(cont.data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getConvites()
    }, [])


    return (
        <View style={styles.container}>

            {convites.length > 0 ?
                <>
                    <View style={styles.title}>
                        <Text style={{ fontWeight: 'bold' }}>Você tem {convites.length} convite(s) aguardando aprovação</Text>
                    </View>

                    <ScrollView style={styles.convites}>

                        {convites.map((i) => {
                            return (

                                <View
                                    key={i.id}
                                    style={styles.convite}
                                >

                                    <Text>{i.solicitante} / {i.id}</Text>

                                    <TouchableOpacity
                                        onPress={() => { aceitar(i.id) }}
                                    >
                                        <Text style={themes.btn}>aceitar</Text>
                                    </TouchableOpacity>

                                </View>
                            )
                        })
                        }

                    </ScrollView>
                </>

                :

                <View style={styles.vazio}>
                    <Text>Nenhum convite recebido :(</Text>
                </View>
            }

        </View>
    );
}