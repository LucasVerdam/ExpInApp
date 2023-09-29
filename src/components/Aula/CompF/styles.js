import { StyleSheet } from 'react-native';
import { themes } from '../../../global/styles/themes';

export const styles = StyleSheet.create({
    container: {
        height: 100,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: themes.colors.blueBtn
    },

    menor: {
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    }
});