import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formContext:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop: 30,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },

    form:{
        width: '100%',
    },

    formLabel:{
        color: '#000',
        fontSize: 18,
        paddingLeft: 20,
    },

    input:{
        width: '90%',
        borderRadius: 50,
        backgroundColor: '#f6f6f6',
        height: 40,
        margin: 12,
        paddingLeft: 10,
    },
    buttonCalculator:{
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        backgroundColor: '#ff0043',
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft: 12,
        margin: 30,
    },
    textButtonCalculator:{
        fontSize: 20,
        color: '#fff',
    },
    errorMessage:{
        fontSize: 12,
        color: 'red',
        fontWeight: 'bold',
        paddingLeft: 10,
        paddingTop: 6,
    },
    
    flex:{
        width: '90%',
        flexDirection: 'row',
    },
    boxAge:{
        width: '45%',
        marginRight: 30,
    },
    inputAge:{
        width: '100%',
        borderRadius: 50,
        backgroundColor: '#f6f6f6',
        height: 40,
        margin: 12,
        paddingLeft: 10,
    },
    radio:{
        marginTop: 15,
        marginLeft: 17,
    },
    exhibitionResultImc:{
        width: '100%',
        height: '50%',
    }
});

export default styles;