import React, {useState} from 'react';

import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';

export default function App(){
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

function handleSubmit() {
  const alt = altura / 100;
  const imc = peso / (alt * alt);
  if(imc < 18.6){
    alert(`Voce esta abaixo do peso ${imc.toFixed(2)}`);
  }else if(imc < 24.9){
    alert(`Peso ideal ${imc.toFixed(2)}`);
  }else if( imc < 34.9){
    alert(`Levemente acima do peso ${imc.toFixed(2)}`);
  }
}

  return(
    <View style={styles.container}>
        <Text style={styles.title}>Calcule seu Imc</Text>
        <TextInput 
          style={styles.input} 
          value={peso}
          onChangeText={ (peso) => setPeso(peso)}
          placeholder="Peso (kg)"
          keyboardType="numeric"
        />

        <TextInput 
          style={styles.input} 
          value={altura}
          onChangeText={ (altura) => setAltura(altura)}
          placeholder="Altuea (cm)"
          keyboardType="numeric"
        />

        <TouchableOpacity onPress={handleSubmit} style={styles.button}>
          <Text style={StyleSheet.buttonText}>Calcular</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    textAlign: 'center',
    marginTop: 25,
    fontSize: 30,
  },
  input: {
    backgroundColor: '#eee',
    borderRadius: 10,
    margin: 15,
    padding: 10,
    color: '#000',
    fontSize: 23,

  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
    backgroundColor: '#41aef4',
    padding: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 25,
  }
})