import { useState } from 'react';
import { TextInput, Text, SafeAreaView, TouchableOpacity }from 'react-native';
import {styles} from './style.ts';
import { LinearGradient } from 'expo-linear-gradient';
export default function Login({navigation}){
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    return(
        <LinearGradient
        colors={["#5E17EB", "#CB6CE6"]}
        >
            <SafeAreaView style={styles.container}>
            <Text style={styles.titleLogin}>Login</Text>
            <TextInput placeholder='Email' style={styles.inputext} onChangeText={text=>setEmail(text)}></TextInput>
            <TextInput placeholder='Senha' secureTextEntry={true}  onChangeText={text=>setSenha(text)} style={styles.inputext}></TextInput>
            <TouchableOpacity 
            style={styles.botao}
            onPress={()=> navigation.navigate('Inicio')}
            >
                <Text style={{opacity:0.9,color:'#000',textAlign:'center'}}>Entrar</Text>
            </TouchableOpacity>
            <Text style={{fontSize:12, color:'#fff',textAlign:'center'}}>{email} -- {senha}</Text>
        </SafeAreaView>
        </LinearGradient>
    )
}