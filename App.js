import {React, useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import Contas from './Componentes/Contas';

export default function App() {
  const [qt, setQt] = useState(0);
  function trocarCor(){
    texto = style=(styles.texto).opacity="1"
}

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>FESTA INFANTIL BEN 10</Text>
      <Image
      style={styles.imgg}
      source={{
        uri: 'https://http2.mlstatic.com/D_NQ_NP_889299-MLB25884996773_082017-O.jpg',
      }}
      />
          <View style={styles.row}>
            <Text style={styles.texto}>DIGITE A QUANTIDADE DE PESSOAS QUE CONFIRMARAM PRESENÇA NA FESTA</Text>
            <TextInput
            style={styles.input}
            value={qt}
            onChangeText={(texto)=>setQt(texto)}
            placeholder='PESSOAS'
            />
      </View>
      <View>
      <Contas qt={qt} />
        </View> 
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0EB98',
    alignItems: 'center',
    justifyContent: 'center',
  },

  texto:{
    color: '#05139E',
    fontSize: 20,
    textAlign: 'center',

  },

  imgg:{
    width: 120,
    height: 90,
    margin: 5,
    borderRadius: 20
  },

  input:{
    width: '80%',
    borderWidth: 1,
    marginLeft: '10%',
    fontSize: 20,
    borderRadius: 10,
    borderColor: '#05139E',
    textAlign: 'center'
  },

  row:{
    width: '100%',
    marginTop: 5
  }

});
