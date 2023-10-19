import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import {styles} from "./styles";
import { LinearGradient } from "expo-linear-gradient";

const ConfigScreen = ({navigation}) =>{
    return(
        <LinearGradient
        colors={["#5E17EB", "#CB6CE6"]}
>
            <SafeAreaView
            style={styles.container}
            >
                <ScrollView
                contentContainerStyle={styles.content}
                >
                    <Text style={styles.Title}>Ajustes</Text>
                    
                    <TouchableOpacity
                    onPress={()=>navigation.navigate('Conta')}
                    >
                        <View
                        style={styles.header}
                        >
                            <Image 
                            source={require('../../../assets/Zezinho_Boladao.jpg')}
                            style={{height:149,width:149,borderRadius:69}}/>
                            <Text 
                            style={styles.headerText}
                            >Zezinho Boladão</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                    onPress={()=>navigation.navigate('Gerais')}
                    >
                        <View
                        style={styles.contentMain}
                        >
                            <Text style={styles.contentText}>Ajustes Gerais</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                    onPress={()=>navigation.navigate('Privacidade')}
                    >
                        <View
                        style={styles.contentMain}
                        >
                            <Text style={styles.contentText}>Privacidade</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                    onPress={()=>navigation.navigate('Sobre')}
                    >
                        <View
                        style={styles.contentMain}
                        >
                            <Text style={styles.contentText}>Sobre</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                    onPress={()=> {alert('Você saiu de sua conta')}}
                    >
                        <View
                        style={styles.contentMain}
                        >
                            <Text style={styles.fotterText}> Sair da conta</Text>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </SafeAreaView>
        </LinearGradient>
    )
}

export default ConfigScreen;