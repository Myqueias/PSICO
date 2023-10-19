import React from 'react';
import {  Text, TouchableOpacity, View,  } from 'react-native';
import { ScrollView,  } from 'react-native-gesture-handler';
import {styles} from './style.ts';
import {LinearGradient} from 'expo-linear-gradient';
import { widthPercentageToDP } from 'react-native-responsive-screen';

export default function TranstornoAprendizagem({navigator}) {
    return(
        <ScrollView style={styles.body}>
            <LinearGradient
            colors={["#5E17EB", "#CB6CE6"]}
            >
            <View>
                <Text style={styles.toptext}>Dificuldade de aprendizagem</Text>
                <View style={styles.barTextTitle}/>
            </View>

            <View style={styles.main}>
                <Text style={styles.mainTextTitle}>
                    Resumo
                </Text>
                    <View style={styles.barTextMain}/>
                <Text style={styles.mainText}>
                    As dificuldade são qualquer tipo de dificulade, ou obstáculo, durante o processo de aprendizado.
                </Text>
                <Text style={styles.mainText}>
                    Em decorrência de fatores, que vão desde causas dentro ou fora do organismo.
                </Text>
                <Text style={styles.mainText}>
                    Esses obstáculos podem estar relacionados a estes fatores:
                </Text>
                <View  style={styles.mainPointText}>

                    <Text style={{color:'#fff'}}>
                        - Fome
                    </Text>
                    <Text style={{color:'#fff'}}>
                        - Desmotivação
                    </Text>
                    <Text style={{color:'#fff'}}>
                        - Problemas sociais
                    </Text>
                    <Text style={{color:'#fff'}}>
                        - Falta de estímulo
                    </Text>
                    <Text style={{color:'#fff'}}>
                        - Destrutura familiar
                    </Text>
                </View>
                <Text style={styles.mainText}>
                    Outros fatores são os transtornos de aprendizagem, veja algums exemplos:
                </Text>                    
                <View style={styles.mainPointText}>
                    <Text style={{color:'#fff'}}>
                        - Autismo
                    </Text>
                    <Text style={{color:'#fff'}}>
                        - Transtorno do déficit de atenção com hiperatividade
                    </Text>
                    <Text style={{color:'#fff'}} >
                        - Dislexia
                    </Text>
                </View>

            </View>

            <View style={{alignItems:'center'}}>
                
                <TouchableOpacity
                onPress={()=> navigator.navigate('Dislexia')}
                style={styles.content}
                >
                    <View>
                        <Text>Dislexia</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={()=> navigator.navigate('Dislexia')}
                style={styles.content}
                >
                    <View>
                        <Text>Dislexia</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={()=> navigator.navigate('Dislexia')}
                style={styles.content}
                >
                    <View>
                        <Text>Dislexia</Text>
                    </View>
                </TouchableOpacity>

            </View>

           </LinearGradient>
        </ScrollView >
           )
}