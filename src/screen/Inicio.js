import * as React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function Inicio({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.htext}>Seja bem-vindo !</Text>
                <Text style={styles.subhtext}>Escolha uma opção para proceder</Text>
            </View>
            <View style={styles.body}>
                <TouchableOpacity onPress={()=>navigation.navigate('Festa')} style={styles.button}>
                    <Text>Ver eventos</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('Cadastrar')} style={styles.button}>
                    <Text>Novo evento</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#333",
    },
    body: {
        flex: 1,
        flexDirection: 'row',
        marginHorizontal:20,
        justifyContent: "center",
        alignItems: "center",
    },
    header: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    htext: {
        fontSize: 40,
        color: 'white',
        fontWeight: "bold",
    },
    subhtext: {
        fontSize: 20,
        margin: 10,
        color: '#f2f2f2',
    },
    
    imageWrapper: {
        padding: 20,
        alignItems: "center",
    },
    button: {
        padding: 15,
        width: "40%",
        marginTop: 20,
        marginBottom: 50,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 10,
        fontWeight: "700",
        alignItems: "center",
        backgroundColor: "#fff",
    },
});
