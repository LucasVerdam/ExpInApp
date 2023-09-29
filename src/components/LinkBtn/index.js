import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

export function Link(props) {
    return (
        <TouchableOpacity
            onPress={(() => { })}
        >
            <Text style={styles.btn}>{props.texto}</Text>
        </TouchableOpacity>

    );
}