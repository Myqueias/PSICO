import { useState } from 'react';
import { TextInput, Text, SafeAreaView, TouchableOpacity }from 'react-native';
import {styles} from './style.ts';
export default function Login({navigation}){
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.titleLogin}>Login</Text>
            <TextInput placeholder='Email' style={styles.inputext} onChangeText={text=>setEmail(text)}></TextInput>
            <TextInput placeholder='Senha' secureTextEntry={true}  onChangeText={text=>setSenha(text)} style={styles.inputext}></TextInput>
            <TouchableOpacity 
            style={styles.botao}
            onPress={()=> navigation.navigate('Inicio')}
            >
                <Text style={{color:'white',textAlign:'center'}}>Entrar</Text>
            </TouchableOpacity>
            <Text style={{fontSize:12, color:'white',textAlign:'center'}}>{email} -- {senha}</Text>
        </SafeAreaView>
    )
}