import React from 'react'
import { Text, TouchableOpacity, View,  } from 'react-native'
import { ScrollView,  } from 'react-native-gesture-handler'
import { styles } from './style.ts'
function mensagem(){
    alert(console.log('Está funcionando'))
}
export default function Inicio({navigation}){
    return(
        <ScrollView>
            <View style={styles.top}>
                <Text style={styles.toptext}>Bem-vindo, zezinho.</Text>
            </View>
            <View style={styles.body}>
                {/*Sobre a empresa */}
                
                <TouchableOpacity
                onPress={()=> navigation.navigate('Psico')}
                >
                    <View style={styles.portfolio}>
                        <Text style={{fontSize:16}}>Quem nós somos?</Text>
                        <Text style={{fontSize:26, marginTop:10}}>PSICO</Text>
                    </View>
                </TouchableOpacity>
                {/*Conteúdo */}
                <TouchableOpacity
                onPress={()=> navigation.navigate('TranstornosMentais')}
                >
                    <View style={styles.transtMental}>
                        <Text style={{fontSize:22, margin:10, marginTop:20, textAlign:'right'}}>Transtornos Mentais</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                onPress={()=> navigation.navigate('Deficiencia')}
                >
                    <View style={styles.pcd}>
                    <Text style={{fontSize:22, margin:30, marginTop:20, textAlign:'right'}}>Deficiências</Text>
                    </View>
                </TouchableOpacity>


                <TouchableOpacity
                onPress={()=> navigation.navigate('Atividade')}
                >
                    <View style={styles.at}>
                    <Text style={{fontSize:22, margin:30, marginTop:20, textAlign:'right'}}>Atividades</Text>
                    </View>
                </TouchableOpacity>

            </View> 
            <View style={styles.fotter}></View>
        </ScrollView>
    )
}