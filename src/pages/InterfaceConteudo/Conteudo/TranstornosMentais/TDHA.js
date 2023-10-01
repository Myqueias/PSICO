import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function TDHA(){
    
    return(
        <ScrollView>
        <View style={styles.body}>
            <View style={styles.module}>
                <Text style={{fontSize:20, color:'white', marginTop:50}}>
                O TDAH, Transtorno do Déficit de Atenção com Hiperatividade, 
                é uma condição neurobiológica que afeta a capacidade de concentração,
                controle de impulsos e hiperatividade/impulsivi-dade.
                </Text>
            </View>
        </View>
    </ScrollView>
)
}

const styles = StyleSheet.create({
    body:{
        width:450,
        backgroundColor: '#2F0459',
        justifyContent: 'center',
        alignItems:'center',
        height: '100%',
    },
    module:{
        borderRadius:10,
        width:400,
        height: '100%',
        backgroundColor: '#7F0CF2',
        padding:15
    }
})