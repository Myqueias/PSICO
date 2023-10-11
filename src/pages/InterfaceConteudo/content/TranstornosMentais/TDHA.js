import {styles} from './styles'
import { ScrollView, Text, View } from "react-native";

export default function TDAH(){
    
    return(
        <ScrollView
        contentContainerStyle={styles.container}
        >
        
        <Text style={{fontSize:23, color:'white'}}>Como lidar com o TDHA</Text>

        <View style={styles.divisao} />

        <View style={styles.body}>
            <View style={styles.module}>
                <Text style={{fontSize:18, color:'white'}}>
1.Avaliação profissional: Consultar um médico ou psicólogo para diagnóstico e orientação é fundamental.
                </Text>
                
                <Text style={{fontSize:18, color:'white'}}>
2.Medicamentos: Em alguns casos, medicamentos prescritos podem ajudar a controlar sintomas.
                </Text>

                <Text style={{fontSize:18, color:'white'}}>
3.Terapia comportamental: Terapia cognitivo-comportamental pode ensinar estratégias para lidar com desafios do TDAH.
                </Text>

                <Text style={{fontSize:18, color:'white'}}>
4.Estabelecer rotina: Criar uma rotina organizada ajuda a gerenciar o tempo e tarefas.
                </Text>

                <Text style={{fontSize:18, color:'white'}}>
5.Priorizar tarefas: Dividir grandes tarefas em partes menores facilita a conclusão.
                </Text>

                <Text style={{fontSize:18, color:'white'}}>
6.Minimizar distrações: Crie um ambiente de estudo/trabalho livre de distrações.
                </Text>

                <Text style={{fontSize:18, color:'white'}}>
7.Uso de técnicas de organização: Listas de tarefas, agendas e lembretes são úteis.
                </Text>

                <Text style={{fontSize:18, color:'white'}}>
8.Exercício e alimentação: Manter um estilo de vida saudável ajuda a controlar os sintomas.
                </Text>

                <Text style={{fontSize:18, color:'white'}}>
9.Autoconhecimento: Aprender sobre o próprio TDAH e como ele afeta você é importante.
                </Text>

                <Text style={{fontSize:18, color:'white'}}>
10.Apoio social: Compartilhar seus desafios com amigos e familiares pode proporcionar apoio emocional.
                </Text>

            </View>

        </View>
    </ScrollView>
)
}

