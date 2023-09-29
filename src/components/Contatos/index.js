import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useAuth } from '../../context/AuthContext';

import { styles } from './styles';
import { themes } from '../../global/styles/themes';


export function Contatos(props) {
    const { logado, setContato } = useAuth();

    return (
        <View style={styles.container}>

            {logado && logado.contatos > 0 ?

                <>
                    <View style={styles.title}>
                        <Text style={{ fontWeight: 'bold' }}>Você tem {logado.contatos.length} contato(s)!</Text>
                    </View>

                    <ScrollView style={styles.contatos}>

                        {logado.contatos.map((i) => {

                            <View
                                key={i.id}
                                style={{ flexDirection: 'row' }}
                            >
                                <TouchableOpacity
                                    onPress={() => { setContato(i.id); props.nav.navigate('Contato'); }}
                                >
                                    <Text style={themes.btn}>{i.nome}</Text>
                                </TouchableOpacity>

                            </View>
                        })}

                    </ScrollView>
                </>

                :

                <View style={styles.vazio}>
                    <Text>Você não possui contatos no momento :(</Text>
                </View>
            }

        </View>

    );
}