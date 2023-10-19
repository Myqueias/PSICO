import { useState } from 'react';
import { TextInput, Text, SafeAreaView, TouchableOpacity, View }from 'react-native';
import {styles} from './style.ts'
import { LinearGradient } from 'expo-linear-gradient';
export default function Cadastro() {
  //Dados
const [nome_completo, setNome] = useState('');
const [email,setEmail] = useState('');
const [senha,setSenha] = useState('');
const [cpf, setCpf] = useState('');

function register(){
  const value = 'Está funcionando';
  return(
    alert(value)
  )
}

  return (

    <LinearGradient
    colors={["#5E17EB", "#CB6CE6"]}
    >
      <SafeAreaView style={styles.container}>
      <Text style={styles.titleCadastro}>Cadastro</Text>
      <View style={styles.barText}/>
      <View style={{justifyContent:'center', alignItems:'center'}}>
        <TextInput placeholder='Nome' style={styles.inputext} onChangeText={text=>setNome(text)}></TextInput>
        <TextInput placeholder='Email' style={styles.inputext} onChangeText={text=>setEmail(text)}></TextInput>
        <TextInput secureTextEntry={true} placeholder='Senha' style={styles.inputext} onChangeText={text=>setSenha(text)}></TextInput>
        <TextInput placeholder='Cpf' style={styles.inputext} onChangeText={text=>setCpf(text)}></TextInput>
        <TouchableOpacity style={styles.botao} onPress={register}>
          <Text style={{color: '#000', opacity:0.9}}>Cadastre-se</Text>
        </TouchableOpacity>
      </View>
      <Text style={{fontSize:12, color:'white',textAlign:'center'}}>{nome_completo} -- {email} -- {senha} -- {email} -- {cpf}</Text>
    </SafeAreaView>
    </LinearGradient>
    
  );
}

