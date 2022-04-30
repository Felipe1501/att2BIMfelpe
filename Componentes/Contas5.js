import React from "react";
import { StyleSheet, Text } from "react-native";

export default function ContasSalgado(props){
    let texto = [];
    let Salgados = (props.qt * 10);
    if(props.qt >= 1){
        texto.push(
            <Text style={styles.texto}>
                SALGADOS: {Salgados} UNIDADES
            </Text>
        );
    }
    return(
        <>
            {texto} 
        </>
    );
}

const styles = StyleSheet.create({
    texto:{

        opacity: 1,
        fontSize: 20,
        color: '#05139E',
        marginLeft: '2%'
    }
})