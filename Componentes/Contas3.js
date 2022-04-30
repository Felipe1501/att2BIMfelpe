import React from "react";
import { StyleSheet, Text } from "react-native";

export default function ContasBolo(props){
    let texto = [];
    let Bolo = (props.qt * 250);
    if(props.qt >= 1){
        if(Bolo >= 1000){
            texto.push(
                <Text style={styles.texto}>
                    BOLO: {Bolo/1000} KG
                </Text>
            );
        }
        else{
            texto.push(
                <Text style={styles.texto}>
                    BOLO: {Bolo} G
                </Text>
            );
        }
        
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