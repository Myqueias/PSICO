import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function TranstornosMentais({navigation}){
    return(
        <ScrollView>
            <View style={styles.body}>
                <View style={styles.module}>

                    <Text style={{fontSize:28, color:'white'}}>Informações</Text>
                    
                    <TouchableOpacity style={styles.TouchableOpacity}
                    onPress={()=>navigation.navigate('Autismo')}
                    >
                            <Text style={styles.text}>Autismo</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.TouchableOpacity}
                    onPress={()=>navigation.navigate('Ansiedade')}
                    >
                            <Text style={styles.text}>Ansiedade</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.TouchableOpacity}
                    onPress={()=>navigation.navigate('Depressão')}
                    >
                            <Text style={styles.text}>Depressão</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.TouchableOpacity}
                    onPress={()=>navigation.navigate('TDHA')}
                    >
                            <Text style={styles.text}>TDHA</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.TouchableOpacity}
                    onPress={()=>navigation.navigate('Curiosidades')}
                    >
                            <Text style={styles.text}>Curiosidades</Text>
                    </TouchableOpacity>
                    
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    body:{
        width:450,
        backgroundColor: '#2F0459',
        justifyContent: 'center',
        alignItems:'center',
        height: '100%',
    },
    module:{
        borderRadius:10,
        width:400,
        height: '100%',
        backgroundColor: '#7F0CF2',
        justifyContent: 'center',
        alignItems:'center',
        padding:15
    },
    text:{
        color:'black',
        fontSize:22
    },
    TouchableOpacity:{
        borderRadius:10,
        width:250,
        height: 50,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems:'center',
        padding:5,
        marginTop:20
    }
})