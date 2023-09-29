import React from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from './styles';

export default (props) => {
    return (
        <>
            <Text>Quadrado azul</Text>

            <View style={styles.container}>
                <View style={styles.menor}></View>
            </View>

            <Button title='Quadrado' onPress={() => console.warn('Isso é um quadrado')}></Button>
        </>
    );
}

