import {styles} from './styles'
import { ScrollView, Text, View } from "react-native";

export default function Visual(){
    
    return(
        <ScrollView
        contentContainerStyle={styles.container}
        >
        
        <Text style={{fontSize:23, color:'white'}}>Como lidar com os problemas visuais</Text>

        <View style={styles.divisao} />

        <View style={styles.body}>
            <View style={styles.module}>
                <Text style={{fontSize:18, color:'white'}}>
1. Avaliação: Consulte um oftalmologista ou especialista em visão para diagnóstico e avaliação.

                </Text>

                <Text style={{fontSize:18, color:'white'}}>
2.Aprendizado: Adquira habilidades de orientação e mobilidade, leitura em Braille e uso de tecnologia assistiva.
                </Text>

                <Text style={{fontSize:18, color:'white'}}>
3. Apoio emocional: Busque apoio de grupos de apoio e profissionais de saúde mental para lidar com desafios emocionais.

                </Text>
                
                <Text style={{fontSize:18, color:'white'}}>
4. Auxílios técnicos: Use tecnologia assistiva, como leitores de tela e lupas eletrônicas, para facilitar a vida cotidiana.
              </Text>
                
                <Text style={{fontSize:18, color:'white'}}>
5. Comunicação: Use métodos alternativos de comunicação, como a linguagem de sinais, quando necessário.
              </Text>
                
                <Text style={{fontSize:18, color:'white'}}>
6. Educação e apoio: Busque recursos educacionais e grupos de apoio para aprender e compartilhar experiências.
                </Text>
                
                <Text style={{fontSize:18, color:'white'}}>
7. Ambiente acessível: Crie um ambiente seguro e acessível em casa e no trabalho.
              </Text>
                
                <Text style={{fontSize:18, color:'white'}}>
8. Treinamento de cão-guia: Considere treinamento com cães-guia para maior independência.
Educação e emprego: Busque oportunidades educacionais e de emprego que atendam às suas habilidades e interesses.
             </Text>
                
            </View>
        </View>
    </ScrollView>
)
}
