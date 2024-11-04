import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import HomeStyles from '../styles/HomeStyles';

export default function HomeScreen({ navigation }) {
  return (
    <View style={HomeStyles.container}>
      <Text style={HomeStyles.title}>Bem-vindo à Tela Inicial!</Text>
      <TouchableOpacity style={HomeStyles.button} onPress={() => navigation.navigate('Medida')}>
        <Text style={HomeStyles.buttonText}>Converter medidas</Text>
      </TouchableOpacity>
      <TouchableOpacity style={HomeStyles.button} onPress={() => navigation.navigate('Moeda')}>
        <Text style={HomeStyles.buttonText}>Converter moedas</Text>
      </TouchableOpacity>
      <TouchableOpacity style={HomeStyles.button} onPress={() => navigation.navigate('IMC')}>
        <Text style={HomeStyles.buttonText}>Calcular IMC</Text>
      </TouchableOpacity>
      
    </View>
  );
}