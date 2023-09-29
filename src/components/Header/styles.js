import { StyleSheet } from 'react-native';
import { themes } from '../../global/styles/themes';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        minHeight: 80,
        marginTop: 50,
        marginBottom: 1,
        paddingHorizontal: 10,
        borderTopWidth: 0.3,
        borderBottomWidth: 0.5,
        borderColor: '#999',
        backgroundColor: '#fff'
    },

    title: {
        fontSize: 25,
        marginBottom: 2,
        color: themes.colors.txtcinza
    },

});