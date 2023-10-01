import { ScrollView, StyleSheet, Text, View } from "react-native";
export default function Autismo(){
    
    return(
        <ScrollView>
        <View style={styles.body}>
            <View style={styles.module}>
                <Text style={{fontSize:20, color:'white', marginTop:50}}>
                O autismo é um distúrbio neurológico que afeta o desenvolvimento social, 
                de comunicação e comportamental de uma pessoa. Caracteriza-se por diferenças 
                individuais significativas, mas geralmente envolve dificuldades na interação 
                social, comunicação não verbal e comportamentos repetitivos.
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