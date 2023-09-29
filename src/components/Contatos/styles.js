import { StyleSheet } from 'react-native';
import { themes } from '../../global/styles/themes';

export const styles = StyleSheet.create({
    container: {
        margin: 15,
    },

    title: {
        padding: 12,
        borderWidth: 1.5,
        borderBottomWidth: 0,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        borderColor: themes.colors.bg,
        backgroundColor: themes.colors.bgclaro
    },

    contatos: {
        padding: 10,
        maxHeight: 100,
        borderWidth: 1.5,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        borderColor: themes.colors.bg
    },

    contato: {
        marginBottom: 18,
    },

    vazio: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        borderWidth: 1.5,
        borderRadius: 8,
        borderColor: themes.colors.bg
    }
});