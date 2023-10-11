import {styles} from './styles'
import { ScrollView, Text, View } from "react-native";

export default function Auditiva(){
    
    return(
        <ScrollView
        contentContainerStyle={styles.container}
        >
        
        <Text style={{fontSize:23, color:'white'}}>Como lidar com os problemas Auditivos</Text>

        <View style={styles.divisao} />

        <View style={styles.body}>
            <View style={styles.module}>
                <Text style={{fontSize:18, color:'white'}}>
1. Avaliação: Consulte um especialista para diagnóstico e avaliação auditiva.
                </Text>

                <Text style={{fontSize:18, color:'white'}}>
2. Aparelhos auditivos: Em muitos casos, aparelhos auditivos podem ajudar a melhorar a audição.
                </Text>

                <Text style={{fontSize:18, color:'white'}}>
3. Comunicação: Aprenda a adaptar a comunicação, usando linguagem gestual, leitura labial ou dispositivos de assistência.

                </Text>
                
                <Text style={{fontSize:18, color:'white'}}>
4. Ambientes silenciosos: Evite ou minimize ruídos excessivos em ambientes para facilitar a comunicação.
                </Text>
                
                <Text style={{fontSize:18, color:'white'}}>
5.Sono adequado: Priorize um sono de qualidade para melhorar o equilíbrio emocional.
                </Text>
                
                <Text style={{fontSize:18, color:'white'}}>
6. Educação e apoio: Busque recursos educacionais e grupos de apoio para aprender e compartilhar experiências.
                </Text>
                
                <Text style={{fontSize:18, color:'white'}}>
7. Acessibilidade: Verifique se os locais que frequenta têm recursos de acessibilidade, como loops de indução.
                </Text>
                
                <Text style={{fontSize:18, color:'white'}}>
8. Paciência: Seja paciente e compreensivo ao se comunicar com pessoas com deficiência auditiva.
                </Text>
                
            </View>
        </View>
    </ScrollView>
)
}
