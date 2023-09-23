import React from "react";
import {Image, View, Text , StyleSheet, TouchableOpacity} from 'react-native';
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
const styles = StyleSheet.create({
tela:{
    backgroundColor:'purple',
    height: '100%',
    width: '100%'
},
titulo:{
    marginTop:10,
    textAlign: 'center',
    color: 'white',
    fontSize: 30
},
img: {
    height:'100%',
    width:'100%'
},
botao: {
    marginTop: 30,
    marginLeft: 80,
    border: 30,
    width: 250,
    height: 40,
    backgroundColor: '#6b2f68',
    justifyContent: "center",
    paddingLeft: 70,
    borderRadius: 20
}
});