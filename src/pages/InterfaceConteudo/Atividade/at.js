import { ScrollView,  Text, TouchableOpacity, View } from "react-native";
import { styles } from './atStyle'

export default function TranstornosMentais({navigation}){
    return(
        <ScrollView>
            <View style={styles.body}>
                <View style={styles.module}>

                    <Text style={{fontSize:28, color:'white'}}>Atividades</Text>
                    
                    <TouchableOpacity style={styles.TouchableOpacity}>
                            <Text style={styles.text}>Atividade 1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.TouchableOpacity}
                    onPress={navigation.navigate('Private')}
                    >
                            <Text style={styles.text}>Atividade 2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.TouchableOpacity}>
                            <Text style={styles.text}>Atividade 3</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.TouchableOpacity}>
                            <Text style={styles.text}>Atividade 4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.TouchableOpacity}>
                            <Text style={styles.text}>Atividade 5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.TouchableOpacity}>
                            <Text style={styles.text}>Atividade 6</Text>
                    </TouchableOpacity>
                    
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
