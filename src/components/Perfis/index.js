import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { themes } from '../../global/styles/themes';

import { api } from '../../services/api';
import { useAuth } from '../../context/AuthContext';


export function Perfis(props) {
    const { authData, setContato, logado } = useAuth();
    const [profiles, setProfiles] = useState();


    async function loadPerfis() {

        try {
            const perfis = await api.get('/perfis/', {
                headers: { 'Authorization': `token ${authData}` }
            })

            setProfiles(perfis.data);
            console.log(perfis.data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        loadPerfis()
    }, [])

    return (
        <View style={styles.container}>

            <View style={styles.title}>
                <Text style={{ fontWeight: 'bold' }}>Todos os Perfis</Text>
            </View>

            <ScrollView style={styles.users}>

                {logado ?

                    profiles?.map((i) => {
                        if (i.id != logado.id) {
                            return (
                                <View
                                    key={i.id}
                                    style={{ flexDirection: 'row' }}
                                >
                                    <TouchableOpacity
                                        onPress={() => { setContato(i.id); props.nav.navigate('Contato'); }}
                                    >
                                        <Text style={themes.btn}>{i.nome}</Text>
                                    </TouchableOpacity>

                                    <Text style={styles.user}> / {i.email}</Text>
                                </View>

                            )
                        }
                    })
                    :
                    null
                }

            </ScrollView>
        </View>
    );
}