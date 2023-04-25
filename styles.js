import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#212121',
        width: '100%',
        height: '100%',
        flexWrap: 'wrap',
        padding: 30,
        paddingTop: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    w100: {
        width: '100%'
    },
    mb50: {
        marginBottom: 50
    },
    input: {
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: 5,
        backgroundColor: '#fff',
        borderRadius: 50,
        width: '70%',
        height: 32
    },
    button: {
        paadding: 10,
        width: '25%',
        borderRadius: 50,
        height: 32,
    },
    text: {
        display: `flex`,
        color: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        padding: 10,
        marginBottom: 10,
        borderRadius: 50,
        marginTop: 10,
        width: '100%'
    }
});

export default styles;