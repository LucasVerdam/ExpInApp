import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { themes } from '../../global/styles/themes';

import { api } from '../../services/api'
import { useAuth } from '../../context/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';


export function Header(props) {
    const { setAuth, setContato } = useAuth();


    return (
        <View style={styles.container}>

            <View>
                <Text style={styles.title}>ExperienceIn</Text>

                {props.perfil ?

                    <TouchableOpacity
                        onPress={() => { setContato(props.perfil.id); props.nav.navigate('Contato') }}
                    >
                        <Text style={themes.btn}>{props.perfil.nome}</Text>
                    </TouchableOpacity>
                    :
                    null
                }
            </View>

            <TouchableOpacity
                onPress={() => {
                    AsyncStorage.removeItem('@Auth_key');
                    setAuth(null)
                }}
            >
                <Text style={themes.btn}>Logout</Text>
            </TouchableOpacity>
        </View>
    );
}