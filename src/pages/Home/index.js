import React from "react";
import {Image, View, Text , TouchableOpacity} from 'react-native';
import {styles} from './style.ts'
export default function Home({navigation}){
    return(
        <View style={styles.tela}>
            <Image source={require('./img/LogoPsico.png')}/>
            <Text style={styles.titulo}>Seja Bem-vido ao Psico</Text>
            
            <TouchableOpacity style={styles.botao}
            onPress={()=> navigation.navigate('Cadastro')}
            >    
                <Text style={{color: 'white', fontSize:18}}>Cadastre-se</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botao}
            onPress={()=> navigation.navigate('Login')}>    
                <Text style={{color: 'white', fontSize:18, paddingLeft:30}}>Login</Text>
            </TouchableOpacity>
        </View>
        )
}
