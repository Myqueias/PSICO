import React from "react";
import {Image, View, Text , TouchableOpacity} from 'react-native';
import {styles} from './style.ts'
import { LinearGradient } from "expo-linear-gradient";
export default function Home({navigation}){
    return(

        <LinearGradient
            colors={["#5E17EB", "#CB6CE6"]}>
            <View style={styles.tela}>
                <Image source={require('./img/LogoPsico.png')}/>
                <Text style={styles.titulo}>Seja Bem-vido ao Psico</Text>
                
                <View style={{alignItems:'center'}}>
                    <TouchableOpacity style={styles.botao}
                    onPress={()=> navigation.navigate('Cadastro')}
                    >    
                        <Text style={{color: "#5E17EB", fontSize:18}}>Cadastre-se</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.botao}
                    onPress={()=> navigation.navigate('Login')}>    
                        <Text style={{color: "#5E17EB", fontSize:18}}>Entrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </LinearGradient>
        )
}
