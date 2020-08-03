import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
const axios = require('axios');

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Consulta de Dados a uma API</Text>
      <StatusBar style="auto" />
    <TouchableOpacity
    style={styles.Button}
    onPress={ function(){
        axios({
          method:'GET',
          url:'http://18.188.214.149:3334/produtos',
          }).then(res=>{
              console.log(res.data);
          }).catch(err => console.log(err));

        }
      }
    >
    <Text>Consultar</Text>
    </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1191',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Button:{
      backgroundColor:'#87CEFA',
      height:45,
      width:'80%',
      margin:10,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:7

  }
});
