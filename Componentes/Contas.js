import React from "react";
import { StyleSheet, Text, View } from "react-native";

/* export default function Contas(props){
   let texto =[];
    for(let x = 0; x <= 10; x++){
        texto.push(
            <Text style={styles.texto}>
                {props.qt} x {x} = {x * props.qt}</Text>
        );
        
    }
    return(
        <>
            <View>
                {texto}
            </View>
        </>
    );
}*/

const styles = StyleSheet.create({
    texto:{
        fontSize: 20,
        color: '#57E625',
        marginLeft: '10%'
    }
})