import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { TextInput, StyleSheet, Text, SafeAreaView, TouchableOpacity }from 'react-native';

export default function Cadastro() {
  //Dados
const [nome_completo, setNome] = useState('');
const [email,setEmail] = useState('');
const [senha,setSenha] = useState('');
const [cpf, setCpf] = useState('');
const [message, setMessage] = useState('');

//Enviando Formulário para o BackEnd 
async function register()
{
  let reqs = await fetch('http://192.168.3.8:8082/create',{
    method: "POST",
    Headers:{
      'Accept':'application/json',
      'Content-Type':'application/json'
    },
    body: JSON.stringify({
      nomeCompleto:nome_completo,
      password:senha,
      email:email,
      cpf:cpf
    })
  })
  let ress = await reqs.json();
  setMessage(ress);
}

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleCadastro}>Cadastro</Text>
      <TextInput placeholder='Nome' style={styles.inputext} onChangeText={text=>setNome(text)}></TextInput>
      <TextInput placeholder='Email' style={styles.inputext} onChangeText={text=>setEmail(text)}></TextInput>
      <TextInput secureTextEntry={true} placeholder='Senha' style={styles.inputext} onChangeText={text=>setSenha(text)}></TextInput>
      <TextInput placeholder='Cpf' style={styles.inputext} onChangeText={text=>setCpf(text)}></TextInput>

      <TouchableOpacity style={styles.botao} onPress={register}>
        <Text style={{color: 'white'}}>Cadastre-se</Text>
      </TouchableOpacity>
      <Text style={{fontSize:12, color:'white',textAlign:'center'}}>{nome_completo} -- {email} -- {senha} -- {email} -- {cpf}</Text>
      <View>
        {message && (
          <Text>{message}</Text>
        )}
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#800080',
    padding: 20,
    height: '100%',
    width: '100%'
  },
  titleCadastro: {
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
