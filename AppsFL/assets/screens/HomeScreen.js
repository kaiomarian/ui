import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import HomeStyles from '../styles/HomeStyles';

export default function HomeScreen({ navigation }) {
  return (
    <View style={HomeStyles.container}>
      <Text style={HomeStyles.title}>Bem-vindo à Tela Inicial!</Text>
      <TouchableOpacity style={HomeStyles.button} onPress={() => navigation.navigate('Sobre')}>
        <Text style={HomeStyles.buttonText}>Ir para Sobre</Text>
      </TouchableOpacity>
    </View>
  );
}
