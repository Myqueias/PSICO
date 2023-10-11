import {styles} from './styles'
import { ScrollView, Text, View } from "react-native";

export default function Intelectual(){
    
    return(
        <ScrollView
        contentContainerStyle={styles.container}
        >
        
        <Text style={{fontSize:23, color:'white'}}>Como lidar com a ansiedade</Text>

        <View style={styles.divisao} />

        <View style={styles.body}>
            <View style={styles.module}>
                <Text style={{fontSize:18, color:'white'}}>
1. Avaliação e diagnóstico: Consulte um profissional de saúde para avaliar o grau de deficiência e suas necessidades específicas.
             </Text>

                <Text style={{fontSize:18, color:'white'}}>
2.Educação e terapia: Busque apoio educacional e terapias especializadas, como a terapia ocupacional, para desenvolver habilidades adaptativas.
              </Text>

                <Text style={{fontSize:18, color:'white'}}>
3.Ambiente de apoio: Crie um ambiente que incentive a independência e ofereça suporte quando necessário.
              </Text>
                
                <Text style={{fontSize:18, color:'white'}}>
4.Paciência e compreensão: Seja paciente e compreensivo ao lidar com desafios de aprendizado e comunicação.
              </Text>
                
                <Text style={{fontSize:18, color:'white'}}>
5.Inclusão social: Promova a participação da pessoa com deficiência intelectual na comunidade e em atividades sociais.
              </Text>
                
                <Text style={{fontSize:18, color:'white'}}>
6.Definição de metas realistas: Estabeleça metas alcançáveis para o desenvolvimento da pessoa, levando em consideração suas capacidades individuais.
              </Text>
                
                <Text style={{fontSize:18, color:'white'}}>
7.Apoio profissional: Consulte terapeutas, educadores e especialistas para orientações e estratégias.
              </Text>
                
                <Text style={{fontSize:18, color:'white'}}>
8.Advocacia: Defenda os direitos da pessoa com deficiência intelectual para garantir igualdade de acesso e oportunidades.
              </Text>
            </View>
        </View>
    </ScrollView>
)
}
