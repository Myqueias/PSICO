import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function Curiosidade(){
    
    return(
        <ScrollView>
        <View style={styles.body}>
            <View style={styles.module}>
                <Text style={{fontSize:28, color:'white',}}>
                    Curiosidades
                </Text>
                <Text style={{fontSize:18, color:'white',marginTop:20}}>
                    Deficiência Auditiva: Muitas pessoas surdas ou com deficiência auditiva utilizam videofonias (VRS) para fazer chamadas de vídeo com tradução em língua de sinais, permitindo a comunicação eficaz.
                    Deficiência Visual: A escrita Braille, um sistema tátil de comunicação, foi inventada por Louis Braille quando tinha apenas 15 anos e é amplamente usada por pessoas cegas em todo o mundo.
                    Deficiência Motora: Stephen Hawking, um renomado cientista, astrônomo e físico teórico, enfrentou uma deficiência motora grave devido à esclerose lateral amiotrófica (ELA), mas suas contribuições para a ciência foram imensuráveis.
                    Deficiência Intelectual: O famoso físico e matemático Albert Einstein, que desenvolveu a Teoria da Relatividade, enfrentou desafios acadêmicos na infância devido a possíveis características de uma deficiência intelectual, mas superou esses obstáculos para se tornar uma das mentes mais brilhantes da história.

 

                </Text>
            </View>
        </View>
        <View style={styles.fotter}>
                <Text style={{color:'white', fontSize:23}}>
                    ETE-MFL
                </Text>
        </View>

    </ScrollView>
)
}

const styles = StyleSheet.create({
    body:{
        height: 849,
        width:409,
        backgroundColor: '#2F0459',
        justifyContent: 'center',
        alignItems:'center'
    },
    module:{
        borderRadius:10,
        width:359,
        height: 709,
        backgroundColor: '#7F0CF2',
        justifyContent: 'center',
        alignItems:'center',
        padding:15
    },
    fotter:{
        height:63,
        width:409,
        backgroundColor: '#7F0CF2',
        justifyContent: 'center',
        alignItems:'center'
    },
})