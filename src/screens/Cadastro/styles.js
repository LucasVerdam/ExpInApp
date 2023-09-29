import { StyleSheet, Dimensions } from 'react-native';
import { themes } from '../../global/styles/themes'

const largTela = Dimensions.get('window').width

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        paddingTop: 100,
        alignItems: 'center',
        backgroundColor: themes.colors.bg
    },

    title: {
        fontSize: 30,
        marginBottom: 10,
        textAlign: 'left'
    },

    input: {
        height: 50,
        width: largTela * 0.8,
        paddingLeft: 10,
        borderRadius: 5,
        borderWidth: 0.5,
        borderColor: themes.colors.txtcinza,
        backgroundColor: themes.colors.bgclaro
    },

    btn: {
        height: 50,
        width: largTela * 0.8,
        marginTop: 15,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: themes.colors.blueBtn
    },

    btnTxt: {
        fontSize: 20,
        color: '#fff',
    },

    register: {
        fontSize: 15,
        marginTop: 5,
        color: themes.colors.txtlink
    }

});