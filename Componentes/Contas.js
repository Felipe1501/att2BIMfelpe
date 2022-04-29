import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

 export default function Contas(props){
   

   let Refri = (props.qt * 600);
   let Agua = (props.qt * 200);
   let Bolo = (props.qt * 100);
   let Doces = (props.qt * 3);
   let Salgadinhos =  (props.qt * 10);
   return (


   <Text style={styles.texto}>
   QUANTIDADE DE GAJOS: {props.qt} <br></br>
    REFRIGERANTE: {Refri} ML <br></br>
    AGUA: {Agua} ML <br></br>
    BOLO: {Bolo} GRAMAS <br></br>
    DOCES: {Doces} UNIDADES <br></br>
    SALGADINHOS: {Salgadinhos} UNIDADES</Text>
   )
}

const styles = StyleSheet.create({
    texto:{

        opacity: 1,
        fontSize: 20,
        color: '#05139E',
        marginLeft: '5%'
    }
})