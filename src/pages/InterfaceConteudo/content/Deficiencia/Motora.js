import {styles} from './styles'
import { ScrollView, Text, View } from "react-native";

export default function Motora(){
    
    return(
        <ScrollView
        contentContainerStyle={styles.container}
        >
        
        <Text style={{fontSize:23, color:'white'}}>Como lidar com os problemas visuais</Text>

        <View style={styles.divisao} />

        <View style={styles.body}>
            <View style={styles.module}>
                <Text style={{fontSize:18, color:'white'}}>
1. Avaliação médica: Consulte um médico para diagnóstico e avaliação da condição motora.
Acesso à educação e emprego: Busque oportunidades que atendam às suas habilidades e interesses.

                </Text>

                <Text style={{fontSize:18, color:'white'}}>
2.Terapia física e ocupacional: Busque terapia para melhorar a força muscular, mobilidade e independência.
              </Text>

                <Text style={{fontSize:18, color:'white'}}>
3. Modificações no ambiente: Adapte o ambiente doméstico e de trabalho para facilitar a locomoção e a acessibilidade.

                </Text>
                
                <Text style={{fontSize:18, color:'white'}}>
4. Treinamento de habilidades: Aprenda técnicas para atividades da vida diária, como vestir-se e alimentar-se de forma independente.
           </Text>
                
                <Text style={{fontSize:18, color:'white'}}>
5. Comunicação: Use métodos alternativos de comunicação, como a linguagem de sinais, quando necessário.
              </Text>
                
                <Text style={{fontSize:18, color:'white'}}>
6. Apoio emocional: Procure apoio psicológico para lidar com questões emocionais relacionadas à deficiência.
             </Text>
                
                <Text style={{fontSize:18, color:'white'}}>
7. Vida ativa: Encontre atividades físicas adaptadas que promovam a saúde e o bem-estar.
           </Text>
                
                <Text style={{fontSize:18, color:'white'}}>
8. Uso de dispositivos de assistência: Utilize dispositivos como cadeiras de rodas, órteses ou próteses, se necessário.
           </Text>
                
            </View>
        </View>
    </ScrollView>
)
}
