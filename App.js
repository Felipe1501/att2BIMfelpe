import {React, useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import ContasRefri from './Componentes/Contas';
import ContasAgua from './Componentes/Contas2';
import ContasBolo from './Componentes/Contas3';
import ContasDoce from './Componentes/Contas4';
import ContasSalgado from './Componentes/Contas5';

export default function App() {
  const [qt, setQt] = useState();
  const [valor, setValor] = useState();

  function contas(){
    setQt(valor);
  }

  function limpar(){
    setQt("");
    setValor("");
  }

  return (
    
    <View style={styles.container}>
      <Text style={styles.comeco}>FELIPE BARBOSA</Text>
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
            value={valor}
            onChangeText={(texto)=>setValor(texto)}
            placeholder='PESSOAS'
            />
      </View>
      <View style={styles.botao}>
        <TouchableOpacity 
        style={styles.btn}
        onPress={contas}>
        <Text style={styles.textobtn}>QUANTIDADE</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.botao}>
        <TouchableOpacity
        style={styles.btn}
        onPress={limpar}>
          <Text style={styles.textobtn}>LIMPAR</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.contas}> QUANTIDADE DE PESSOAS: {qt} <br></br>
    <ContasRefri qt={qt} /> <br></br>
    <ContasAgua qt={qt} /> <br></br>
    <ContasBolo qt={qt} /> <br></br>
    <ContasDoce qt={qt} /> <br></br>
    <ContasSalgado qt={qt} />
    </Text>

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

  comeco:{
    color: '#05139E',
    fontSize: 20,
    marginTop: '-10%',
    textAlign: 'center',
  },

  texto:{
    color: '#05139E',
    fontSize: 20,
    marginTop: '2%',
    textAlign: 'center',

  },

  textobtn:{
    color: '#86F563',
    fontSize: 20,
    marginTop: '2%',
    textAlign: 'center',

  },


  botao:{
    width:'100%',
    alignItems:'center',
    marginTop: 30,

  },

  btn:{
    backgroundColor: '#05139E',
    borderColor: '#1D1AF5',
    borderRadius: 20,
    width: '80%',
    height: '120%',
    textAlign: 'center',
  },

  contas:{
    color: '#05139E',
    fontSize: 20,
    marginTop: '4%',
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
    marginTop: '4%',
    textAlign: 'center'
  },

  row:{
    width: '100%',
    marginTop: 5
  }

});
