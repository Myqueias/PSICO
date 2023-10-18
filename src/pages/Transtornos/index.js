import React from 'react'
import { SafeAreaView, Text, TouchableOpacity, View,  } from 'react-native'
import { styles } from './style.ts'
import {LinearGradient} from 'expo-linear-gradient'

export default function Transtornos({navigation}){
    return(
        <SafeAreaView
        >
            <LinearGradient
            colors={["#5E17EB", "#CB6CE6"]}
            Style={styles.body}
            >

                <View style={styles.top}>
                    <Text style={styles.toptext}>O que é um transtorno mental ?</Text>
                    <View style={styles.barText}/>
                </View>
                <View style={styles.main}>
                    
                    <Text style={styles.mainText}>
                    O transtorno mental é uma disfunção da atividade cerebral que pode gerar prejuízos emocionais e físicos de forma bastante significativa. Tais distúrbios podem afetar o humor, o comportamento, o raciocínio e também influenciar na concentração e memória
                    </Text>

                    {/*Conteúdo */}
                    <TouchableOpacity
                    onPress={()=> navigation.navigate('TranstornosMentais')}
                    >
                        <View style={styles.container}>
                            <Text style={{fontSize:18, margin:10, marginTop:20, textAlign:'center'}}>Transtornos Mentais</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                    onPress={()=> navigation.navigate('Deficiencia')}
                    >
                        <View style={styles.container}>
                        <Text style={{fontSize:18, margin:30, marginTop:20, textAlign:'center'}}>Transtornos de Aprendizagem</Text>
                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity
                    onPress={()=> navigation.navigate('Atividade')}
                    >
                        <View style={styles.container}>
                        <Text style={{fontSize:18, margin:30, marginTop:20, textAlign:'center'}}>Atividades</Text>
                        </View>
                    </TouchableOpacity>

                </View> 
                <View style={styles.fotter}>
                    <Text style={{color:'white',fontSize:22}}>
                        ETE-MFL 2023
                    </Text>
                </View>
            </LinearGradient>
        </SafeAreaView>
    )
}