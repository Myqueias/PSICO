import { Text, StyleSheet, View }from 'react-native';

export default function Profile({navigation}){
    

    return(
        <View>
            <View style={CSS.top}>
                <Text style={{color:'white',fontSize:23}}>Central de Contas</Text>
                <View style={{width:209, justifyContent:'center',alignItems:'center'}}>
                    <Text style={{color:'white'}}>
                        Gerencie suas experiências conectadas e configurações de contas nas tecnologias da PSICO 
                    </Text>
                </View>
            </View>
            <View style={CSS.head}>
                <View><Text style={{color:'white'}}>Perfil</Text></View>
            </View>

            <Text style={{color:'white'}}>Configurações de contas</Text>
            
            <View style={CSS.body}>
                <View>
                    <Text style={{color:'white'}}>Dados pessoais</Text>
                </View>
                <View>
                    <Text style={{color:'white'}}>Senhas e seguranças</Text>
                </View>
                <View>
                    <Text style={{color:'white'}}>Suas informações e permissões</Text>
                </View>
                <View>
                    <Text style={{color:'white'}}>Pagamentos</Text>
                </View>
            </View>

            <View style={CSS.fotter}>
                <Text style={{color:'white'}}>Contas</Text>
            </View>
        </View>

        
    )
}
const CSS = StyleSheet.create({
    top:{
        height:99,
        backgroundColor:'black',
        justifyContent:'center',
        alignItems:'center',
        marginBottom:13
    },
    body:{
        height:929,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'black'
    },
    head:{
        borderRadius:13,
        backgroundColor:'gray',
        height:109,
        width:359,
        paddingLeft:33,
        marginLeft:46
    },
    main:{
        borderRadius:13,
        backgroundColor:'black',
        height:409,
        width:309,
    },
    fotter:{
        height:69,
        width:309,
        backgroundColor:'black',
        justifyContent:'center',
        alignItems:'center'
    },
})
