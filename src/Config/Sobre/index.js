import React from 'react';
import { Text,  View,  } from 'react-native';
import { ScrollView,  } from 'react-native-gesture-handler';
import { styles } from './styles';
import { LinearGradient } from 'expo-linear-gradient';

const Sobre = ()=>{return(
    <ScrollView>
        <LinearGradient
        colors={["#5E17EB", "#CB6CE6"]}
        >  
            <View style={styles.body}>
                <View style={[styles.module, {opacity:0.9}]}>
                    <Text style={{fontSize:20, color:'#000'}}>
                        Psico é uma empresa de desenvolvimento de software voltado para o setor educacional e saúde.
                        Temos como objetivo deste projeto, ajudar os educadores para melhorar o ensino e tratamento
                        daquelas pessoas com deficiência física e mental, tanto na escola, locais públicos e em casa.
                    </Text>
                    <Text style={{fontSize:20, color:'#000', marginTop:50}}>
                        Enim ullamco eu non commodo mollit dolore dolor exercitation consectetur dolore esse exercitation. Ut consequat id labore velit tempor dolor pariatur id sint veniam amet. Aute laboris voluptate elit culpa nostrud. Est irure mollit laboris eu aliqua duis consectetur laborum id irure laborum nulla amet. Duis cupidatat id id velit non deserunt culpa aute tempor.
                        Enim qui magna amet do velit velit incididunt mollit id. Aliqua adipisicing pariatur commodo tempor culpa amet nulla dolore cupidatat pariatur veniam cupidatat. Quis esse culpa nulla amet duis. Laboris ad eu proident sunt magna elit id incididunt consequat laboris magna elit elit.
                        Reprehenderit est laborum et aute sit consectetur adipisicing laborum ea labore amet incididunt. Aliqua velit culpa labore quis magna amet. Tempor duis aute cupidatat magna eiusmod est duis ad fugiat. Aute minim sunt nisi minim sunt.
                    </Text>
                </View>
            </View>
            <View style={styles.fotter}>
                <Text style={{color:'#fff', fontSize:23}}>
                    ETE-MFL
                </Text>
                <Text style={{color:'#fff', fontSize:16}}>
                    2023
                </Text>
            </View>
        </LinearGradient>
    </ScrollView>

)}


export default Sobre;