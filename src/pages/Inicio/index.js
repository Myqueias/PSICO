import React from 'react'
import { Text, View, Image } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { styles } from './style.ts'
function mensagem(){
    alert(console.log('Está funcionando'))
}
export default function Inicio(){
    return(
        <ScrollView
        style={styles.container}
        >
            <View
            style={styles.top}
            ></View>

            <View style={styles.head}>                
                <View 
                style={styles.div}>
                    <Image
                        source={require('./FotoExemplo.jpg')}
                        style={styles.img}
                    />
                    <Text style={styles.text}>Transtornos Mentais</Text>
                    <TouchableOpacity
                    style={styles.butto}
                    onPress={mensagem}
                    >
                        <Text
                        style={{color:'black',fontSize:18}}
                        >APRENDA</Text>
                    </TouchableOpacity>
                </View>
                
                <View style={[styles.div]}>
                    <Image
                        source={require('./FotoExemplo02.jpg')}
                        style={styles.img}
                    />
                    <Text 
                    style={[styles.text, {color:'black'}]}>Transtornos Físicos</Text>
                    <TouchableOpacity
                    style={styles.butto}
                    onPress={mensagem}
                    >
                        <Text
                        style={{color:'black',fontSize:18}}
                        >APRENDA</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.body}>
                <View
                style={styles.div}>
                    <Image
                        source={require('./FotoExemplo.jpg')}
                        style={styles.img}
                    />
                    <Text style={styles.text}>Transtornos Mentais</Text>
                    <TouchableOpacity
                    style={styles.butto}
                    onPress={mensagem}
                    >
                        <Text
                        style={{color:'black',fontSize:18}}
                        >APRENDA</Text>
                    </TouchableOpacity>
                </View>
                <View
                style={styles.div}
                ></View>
                <View
                style={styles.div}
                ></View>
                <View
                style={styles.div}
                ></View>
                <View
                style={styles.div}
                ></View>
            </View>
        </ScrollView>
    )
}