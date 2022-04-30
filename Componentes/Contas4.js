import React from "react";
import { StyleSheet, Text } from "react-native";

export default function ContasDoces(props){
    let texto = [];
    let Doce = (props.qt * 3);
    if(props.qt >= 1){
        texto.push(
            <Text style={styles.texto}>
                DOCE: {Doce} UNIDADES
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