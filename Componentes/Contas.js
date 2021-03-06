import React from "react";
import { StyleSheet, Text } from "react-native";


export default function ContasRefri(props){
    let texto = [];
    let Refri = (props.qt * 600);
    if(props.qt >= 1){
        if(Refri >= 1000){
            texto.push(
                <Text style={styles.texto}>
                    REFRIGERANTE: {Refri/1000} LITROS
                </Text>
             );
        }
        else{
            texto.push(
                <Text style={styles.texto}>
                    REFRIGERANTE: {Refri} ML
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
        marginTop: '4%',
        marginLeft: '2%'
    }
})