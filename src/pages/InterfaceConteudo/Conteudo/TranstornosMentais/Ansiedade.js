import { ScrollView, StyleSheet, Text,  View } from "react-native";
export default function Ansiedade(){
    
    return(
        <ScrollView>
        <View style={styles.body}>
            <View style={styles.module}>
                <Text style={{fontSize:20, color:'white', marginTop:50}}>
                    A ansiedade é uma resposta natural do corpo ao estresse, 
                    mas pode se tornar um problema quando é excessiva ou persistente.
                    Ela envolve preocupação, medo e tensão intensos em relação a situações 
                    futuras.
                </Text>
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
        padding:15
    }
})