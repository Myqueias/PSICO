import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function TranstornosMentais({navigation}){
    return(
        <ScrollView>
            <View style={styles.body}>
                <View style={styles.module}>

                    <Text style={{fontSize:28, color:'white'}}>Atividades</Text>
                    
                    <TouchableOpacity style={styles.TouchableOpacity}>
                            <Text style={styles.text}>Atividade 1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.TouchableOpacity}>
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