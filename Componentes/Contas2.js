import React from "react";
import { StyleSheet, Text } from "react-native";

export default function ContasAgua(props){
    let texto = [];
    let Agua = (props.qt * 200);
    if(props.qt >= 1){
        if(Agua >= 1000){
            texto.push(
                <Text style={styles.texto}>
                    ÁGUA: {Agua/1000} LITROS
                </Text>
            );
        }
        else{
            texto.push(
                <Text style={styles.texto}>
                    ÁGUA: {Agua} ML
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