import React from 'react';
import { Text, TouchableOpacity, View,  } from 'react-native';
import { ScrollView,  } from 'react-native-gesture-handler';
import { styles } from './style.ts';
import {LinearGradient} from 'expo-linear-gradient';

export default function Inicio({navigation}){
    return(
        <ScrollView
        >
            <LinearGradient
            colors={["#5E17EB", "#CB6CE6"]}
            Style={styles.body}
            >

                <View style={styles.top}>
                    <Text style={styles.toptext}>Bem-vindo, zezinho.</Text>
                </View>
                <View style={styles.main}>
                    
                    {/*Conteúdo */}
                    <TouchableOpacity
                    onPress={()=> navigation.navigate('TranstornosMentais')}
                    >
                        <View style={styles.container}>
                            <Text style={{fontSize:22, margin:10, marginTop:20, textAlign:'right'}}>Transtornos Mentais</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                    onPress={()=> navigation.navigate('Deficiencia')}
                    >
                        <View style={styles.container}>
                        <Text style={{fontSize:22, margin:30, marginTop:20, textAlign:'right'}}>Deficiências</Text>
                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity
                    onPress={()=> navigation.navigate('Atividade')}
                    >
                        <View style={styles.container}>
                        <Text style={{fontSize:22, margin:30, marginTop:20, textAlign:'right'}}>Atividades</Text>
                        </View>
                    </TouchableOpacity>

                </View> 
                <View style={styles.fotter}>
                    <Text style={{color:'white',fontSize:22}}>
                        ETE-MFL 2023
                    </Text>
                </View>
            </LinearGradient>
        </ScrollView>
    )
}