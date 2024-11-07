import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, SafeAreaView } from 'react-native';

export default function CadastroScreen ({navigation}) {
    return (
      <SafeAreaView style={styles.background}>
        <View style={styles.container}>
          <Image
           source={{ uri: 'https://cdn-icons-png.flaticon.com/512/711/711769.png'}}
           style={styles.logo}
           />
          <View style={styles.inputView}>
            <TextInput
            style={styles.inputText}
            placeholder='Login'
            placeholderTextColor={'#003f5c'}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
            style={styles.inputText}
            placeholder='Senha'
            placeholderTextColor={'#003f5c'}
            secureTextEntry={true}
            />
          </View>
          <TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginBtn1} onPress={() => navigation.navigate('Cadastro')}>
            <Text style={styles.loginText}>Cadastro</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    logo: {
      width: 150,
      height: 150,
      marginBottom: 40,
    },
    inputView: {
      width: '80%',
      backgroundColor: '#fff',
      borderRadius: 25,
      height:  50,
      marginBottom: 20,
      justifyContent: 'center',
      padding: 20,
      flexDirection:  'row',
      alignItems: 'center',
      borderColor: 'black',
    },
    inputText: {
      height: 50,
      color: 'black',
      flex: 1,
      borderColor: 'black',
    },
    loginBtn: {
      width: '80%',
      backgroundColor: 'black',
      borderRadius: 25,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 40,
      marginBottom: 10,
    },
    loginText : {
      color: 'white',
    },
    background: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
      backgroundColor: '#f5f5dc',
    },
    loginBtn1: {
      width: '80%',
      backgroundColor: 'gray',
      borderRadius: 25,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 5,
      marginBottom: 5,
    },
  }); 