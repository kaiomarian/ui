import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function CMEScreen() {
  const [valor, setValor] = useState('');
  const [resultado, setResultado] = useState('');

  const converterMetrosParaCentimetros = () => {
    const metros = parseFloat(valor);
    const resultado = metros * 100;
    setResultado(`Resultado: ${resultado.toFixed(2)} cm`);
  };

  const converterCentimetrosParaMetros = () => {
    const centimetros = parseFloat(valor);
    const resultado = centimetros / 100;
    setResultado(`Resultado: ${resultado.toFixed(2)} m`);
  };

  const converterQuilometrosParaMilhas = () => {
    const quilometros = parseFloat(valor);
    const resultado = quilometros * 0.621371;
    setResultado(`Resultado: ${resultado.toFixed(2)} mi`);
  };

  const converterMilhasParaQuilometros = () => {
    const milhas = parseFloat(valor);
    const resultado = milhas / 0.621371;
    setResultado(`Resultado: ${resultado.toFixed(2)} km`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conversor de Medidas</Text>
      <TextInput
        style={styles.input}
        placeholder="Valor"
        keyboardType="numeric"
        value={valor}
        onChangeText={setValor}
      />
      <TouchableOpacity style={styles.button} onPress={converterMetrosParaCentimetros}>
        <Text style={styles.buttonText}>Converter m para cm</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={converterCentimetrosParaMetros}>
        <Text style={styles.buttonText}>Converter cm para m</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={converterQuilometrosParaMilhas}>
        <Text style={styles.buttonText}>Converter km para mi</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={converterMilhasParaQuilometros}>
        <Text style={styles.buttonText}>Converter mi para km</Text>
      </TouchableOpacity>
      <Text style={styles.resultado}>{resultado}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    width: '20%',
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#1b2c1d',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    width: '20%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  resultado: {
    marginTop: 20,
    fontSize: 16,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
});