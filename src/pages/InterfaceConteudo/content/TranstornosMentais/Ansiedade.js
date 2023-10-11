import {styles} from './styles'
import { ScrollView, Text, View } from "react-native";

export default function Ansiedade(){
    
    return(
        <ScrollView
        contentContainerStyle={styles.container}
        >
        
        <Text style={{fontSize:23, color:'white'}}>Como lidar com a ansiedade</Text>

        <View style={styles.divisao} />

        <View style={styles.body}>
            <View style={styles.module}>
                <Text style={{fontSize:18, color:'white'}}>
1. Autoconhecimento: Reconheça seus sintomas e gatilhos de ansiedade.
                </Text>

                <Text style={{fontSize:18, color:'white'}}>
2.Respiração profunda: Pratique técnicas de respiração profunda para acalmar o corpo.
                </Text>

                <Text style={{fontSize:18, color:'white'}}>
3.Exercício: A atividade física regular pode reduzir a ansiedade.
                </Text>
                
                <Text style={{fontSize:18, color:'white'}}>
4.Alimentação saudável: Uma dieta equilibrada pode impactar positivamente o humor.
                </Text>
                
                <Text style={{fontSize:18, color:'white'}}>
5.Sono adequado: Priorize um sono de qualidade para melhorar o equilíbrio emocional.
                </Text>
                
                <Text style={{fontSize:18, color:'white'}}>
6.Gerenciamento de estresse: Aprenda a identificar e lidar com o estresse de maneira saudável.
                </Text>
                
                <Text style={{fontSize:18, color:'white'}}>
7.Mindfulness e meditação: Pratique técnicas de atenção plena para reduzir a ansiedade.
                </Text>
                
                <Text style={{fontSize:18, color:'white'}}>
8.Terapia: Consultar um terapeuta pode ser benéfico para aprender estratégias de enfrentamento.
                </Text>
                
                <Text style={{fontSize:18, color:'white'}}>
9.Medicamentos: Em casos graves, um médico pode prescrever medicamentos para a ansiedade.
                </Text>

                <Text style={{fontSize:18, color:'white'}}>
10.Apoio social: Compartilhar seus sentimentos com amigos e familiares pode ser reconfortante.
                </Text>
            </View>
        </View>
    </ScrollView>
)
}
