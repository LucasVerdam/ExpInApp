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

    users: {
        padding: 10,
        maxHeight: 150,
        borderWidth: 1.5,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        borderColor: themes.colors.bg
    },

    user: {
        fontSize: 15,
        marginBottom: 18,
    },

    link: {
        color: themes.colors.txtlink
    }
});