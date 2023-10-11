import { ScrollView, Text,  View } from "react-native";
import { styles } from "./styles";

export default function Depressao(){
    
    return(
        <ScrollView
        contentContainerStyle={styles.container}
        >
        
        <Text style={{fontSize:23, color:'white'}}>Como lidar com a depressão</Text>

        <View style={styles.divisao} />

        <View style={styles.body}>
            <View style={styles.module}>
                <Text style={{fontSize:18, color:'white'}}>
1.Buscar ajuda profissional: Consultar um psicólogo ou psiquiatra é essencial para diagnóstico e tratamento adequados.
                </Text>

                <Text style={{fontSize:18, color:'white'}}>
2.Terapia: A terapia cognitivo-comportamental é eficaz no tratamento da depressão.
                </Text>

                <Text style={{fontSize:18, color:'white'}}>
3.Medicamentos: Em casos mais graves, um médico pode prescrever antidepressivos.
                </Text>

                <Text style={{fontSize:18, color:'white'}}>
4.Suporte social: Manter contato com amigos e familiares pode ajudar a reduzir o isolamento.
                </Text>

                <Text style={{fontSize:18, color:'white'}}>
5.Estabelecer rotina: Criar uma rotina diária pode proporcionar estrutura e propósito.
                </Text>

                <Text style={{fontSize:18, color:'white'}}>
6.Exercício físico: A atividade física regular pode melhorar o humor.
                </Text>

                <Text style={{fontSize:18, color:'white'}}>
7.Alimentação saudável: Uma dieta balanceada pode afetar positivamente o bem-estar.
                </Text>

                <Text style={{fontSize:18, color:'white'}}>
8.Sono adequado: Priorizar o sono de qualidade é importante para a recuperação.
                </Text>

                <Text style={{fontSize:18, color:'white'}}>
9.Evitar álcool e drogas: O abuso de substâncias pode agravar a depressão.
                </Text>

                <Text style={{fontSize:18, color:'white'}}>
10.Autoaceitação: Reconhecer que a depressão é uma condição médica e não um sinal de fraqueza é fundamental.
                </Text>
                
            </View>
        </View>
    </ScrollView>
)
}
