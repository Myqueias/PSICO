import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useState } from 'react';
import { TextInput, StyleSheet, Text, SafeAreaView, TouchableOpacity }from 'react-native';

export default function Login({navigation}){
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.titleLogin}>Login</Text>
            <TextInput placeholder='Email' style={styles.inputext} onChangeText={text=>setEmail(text)}></TextInput>
            <TextInput placeholder='Senha' secureTextEntry={true}  onChangeText={text=>setSenha(text)} style={styles.inputext}></TextInput>
        <NavigationContainer>
          <Stack.Screen />
        </NavigationContainer>
            <TouchableOpacity style={styles.botao}>
                <Text style={{color:'white'}}>Entrar</Text>
            </TouchableOpacity>
            <Text style={{fontSize:12, color:'white',textAlign:'center'}}>{email} -- {senha}</Text>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#800080',
      padding: 20,
      height: '100%',
      width: '100%'
    },
    titleLogin: {
      color: 'white',
      fontSize: 50,
      marginLeft:10,
      marginTop:200,
    },
    inputext: {
      marginTop: 30,
      width: '100%' ,
      height: 40,
      backgroundColor: "white",
      borderRadius: 20,
      paddingLeft:10, 
    },
   botao: {
      marginTop: 30,
      border: 30,
      width: '100%',
      height: 40,
      backgroundColor: '#6b2f68',
      justifyContent: "center",
      paddingLeft: 140,
      borderRadius: 20
    },
  });
  