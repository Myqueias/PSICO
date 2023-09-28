import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Ansiedade(){
    
    return(
        <ScrollView>
        <View style={styles.body}>
            <View style={styles.module}>
                <Text style={{fontSize:20, color:'white', marginTop:50}}>
                    Enim ullamco eu non commodo mollit dolore dolor exercitation consectetur dolore esse exercitation. Ut consequat id labore velit tempor dolor pariatur id sint veniam amet. Aute laboris voluptate elit culpa nostrud. Est irure mollit laboris eu aliqua duis consectetur laborum id irure laborum nulla amet. Duis cupidatat id id velit non deserunt culpa aute tempor.
                    Enim qui magna amet do velit velit incididunt mollit id. Aliqua adipisicing pariatur commodo tempor culpa amet nulla dolore cupidatat pariatur veniam cupidatat. Quis esse culpa nulla amet duis. Laboris ad eu proident sunt magna elit id incididunt consequat laboris magna elit elit.
                    Reprehenderit est laborum et aute sit consectetur adipisicing laborum ea labore amet incididunt. Aliqua velit culpa labore quis magna amet. Tempor duis aute cupidatat magna eiusmod est duis ad fugiat. Aute minim sunt nisi minim sunt.
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