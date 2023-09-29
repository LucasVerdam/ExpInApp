import { StyleSheet } from 'react-native';
import { themes } from '../../global/styles/themes';

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff'
    },

    perfil: {
        margin: 15
    },

    nome: {
        fontSize: 35,
        marginBottom: 15
    },

    empr: {
        fontSize: 20,
        marginBottom: 5,
        fontWeight: 'bold'
    },

    tel: {
        fontSize: 18,
        marginBottom: 10
    },

    email: {

    },

    connect: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        margin: 15,
        borderWidth: 1.5,
        borderRadius: 8,
        backgroundColor: themes.colors.bgclaro,
        borderColor: themes.colors.bg
    }
});