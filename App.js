import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (

    <View style={styles.container}>
      <View style={styles.container2}>

        <Text style={styles.title}>Bem-vindo! Faça o login no site de desenvolvedor web!</Text>
        <View style={styles.camp}>
          <TextInput placeholder="User" style={styles.campo1} />
          <TextInput secureTextEntry placeholder="Password" style={styles.campo2} />
        </View>
        <TouchableOpacity style={styles.button}>LOGAR</TouchableOpacity>

        <StatusBar style="auto" />
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 5,
    backgroundColor: '#1C1C1C',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#00FF00',
    fontSize: 40,
    marginBottom: 55,
  },
  container2: {
    backgroundColor: '#7CFC00	',
    borderColor: '#00FF00',
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: 'auto',
    paddingBottom: '90px',
    paddingTop: '50px',
    paddingRight: '10px',
    paddingLeft: '10px',
    shadowColor: '#7CFC00',
    shadowRadius: 10,
  },

  button: {
    color: '#00FF00',
    fontSize: 18,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4F4F4F',
    width: 0,
    height: '20px',
  },
  campo1: {
    color: '#00FF00',
    fontSize: '16',
    height: 22,
    marginBottom: 15,
    borderWidth: 5,
    borderRadius: 10,
    backgroundColor: '#1C1C1C',
    padding: 10,
  },
  campo2: {
    color: '#00FF00',
    fontSize: '16',
    height: 22,
    marginBottom: 22,
    borderWidth: 5,
    borderRadius: 10,
    backgroundColor: '#1C1C1C',
    padding: 10,
  },
 
});
