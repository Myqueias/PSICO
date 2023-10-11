import {styles} from './styles'
import { ScrollView, Text, View } from "react-native";

export default function Autismo(){
    
    return(
        <ScrollView
        contentContainerStyle={styles.container}
        >
        
        <Text style={{fontSize:23, color:'white'}}>Como lidar com o autismo</Text>

        <View style={styles.divisao} />

        <View style={styles.body}>
            <View style={styles.module}>
                <Text style={{fontSize:18, color:'white'}}>
1.Educar-se: Entender o autismo e suas características é fundamental para oferecer o apoio adequado.
                </Text>
                <Text style={{fontSize:18, color:'white'}}>
2.Comunicação: Adaptar a comunicação para atender às necessidades da pessoa autista, seja através de comunicação verbal, comunicação alternativa ou gestos.
                </Text>
                <Text style={{fontSize:18, color:'white'}}>
3.Estimular interesses: Fomentar atividades que a pessoa autista goste e seja talentosa pode ajudar no seu desenvolvimento.
                </Text>
                <Text style={{fontSize:18, color:'white'}}>
4.Rotina e previsibilidade: Estabelecer rotinas consistentes e previsíveis pode ajudar a reduzir a ansiedade.
                </Text>
                <Text style={{fontSize:18, color:'white'}}>
5.Inclusão e aceitação: Promover um ambiente inclusivo e aceitante é essencial para o bem-estar da pessoa autista.
                </Text>
                <Text style={{fontSize:18, color:'white'}}>
6.Terapia: Terapias como a ABA (Análise do Comportamento Aplicada) e terapia ocupacional podem ser benéficas.
                </Text>
                <Text style={{fontSize:18, color:'white'}}>
7.Apoio profissional: Consultar um profissional de saúde especializado em autismo pode oferecer orientações valiosas.
                </Text>

            </View>
        </View>
    </ScrollView>
)
}
