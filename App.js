import React, {useState} from 'react'
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';


const AppCalcSimples=() => {
  const [getN1, setN1] = useState()
  const [getN2, setN2] = useState()
  const [getRes, setRes] = useState()

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Digite um numero</Text>
      <TextInput inputMode = 'numeric' value={getN1} onChangeText={n1 => setN1(n1)} style={styles.input}></TextInput>

      <Text style={styles.label}>Digite outro numero</Text>
      <TextInput inputMode = 'numeric' value={getN2} onChangeText={n2 => setN2(n2)}  style={styles.input}></TextInput>

      <Button title='Somar'
        onPress = {() => {
          console.log('Somar clicado');
          console.log('N1: ' + getN1 + ' ' + 'N2: ' + getN2);
          const r = parseInt(getN1) + parseInt(getN2)
          setRes(String(r));
        }}

      ></Button>

      <Text style={styles.label}>Resultado</Text>
      <TextInput inputMode = 'numeric' value={getRes} style={styles.input}></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    width: '80%',
    marginLeft:'3%',
    fontSize: 25,
    fontFamily: 'bold',
  },
  input: {
    backgroundColor: '#fff',
    width: '80%',
    heigth: 50,
    marginLeft: '3%',
    fontSize: 'bold',
    borderWidth: 2,
    borderRadius: 5, 
    padding:3,
  }

});

export default AppCalcSimples;