import { useState } from 'react';
import { View } from 'react-native';
import { TextInput, Text, StyleSheet, TouchableOpacity, ScrollView }from 'react-native';
import { styles } from './style';
export default function Config({navigation}){
    

    return(
        <ScrollView>
            <View style={CSS.body}>
                {/*Topo da tela de config */}
                <View  style={CSS.topo}>
                    <Text style={{color:'white',fontSize:23}}>Notificações e Configurações</Text>
                </View>
                {/*Noficações */}
                <View>
                    <Text style={{color:'white',}}>Minhas Noficações</Text>
                    <View>
                        <Text style={{color:'white',}}>Atividade em seu espaço de trabalho</Text>
                        <Text style={{color:'white',}}>Receba e-mails sobre estudos, notícias médicas, websites e alterações de propriedades</Text>
                        <Text style={{color:'white',}}>Sempre enviar noficações por e-mails</Text>
                        <Text style={{color:'white',}}>Receba e-mails sobre atividades em seu espaço de trabalho, mesmo quando estiver usando o aplicativo</Text>
                        <Text style={{color:'white',}}>Boletim por e-mail</Text>
                        <Text style={{color:'white',}}>Receba boletins por e-mails a cada 8 horas sobre alterações nas páginas que você assinou</Text>
                    </View>

                {/*Configurações */}
                <View>
                    <Text style={{color:'white',}}>Senha</Text>
                    <Text style={{color:'white',}}>Defina uma senha permanente para acessar sua conta</Text>
                    <Text style={{color:'white',}}>Aparência</Text>
                    <Text style={{color:'white',}}>Personalize a aparência do Aplicativo no seu dispositivo</Text>
                    <Text style={{color:'white',}}>Excluir minha conta</Text>
                    <Text style={{color:'white',}}>Excluar permanentemente a conta e remova o acesso de todos os espaços de trabalho</Text>
                    <Text style={{color:'white',}}>Privacidade</Text>
                    <Text style={{color:'white',}}>loremasda asodnapsdnaosnd asojkdnhapsdnasndhas jasndopasnopd naposndpasiod</Text>
                </View>
                </View>

            </View>
        </ScrollView>
    )
}

const CSS = StyleSheet.create({
    topo:{
        height:73,
        backgroundColor:'gray'
        ,justifyContent:'center',
        alignItems:'center',
        marginTop:3,
        borderRadius:9
    },
    body:{
        backgroundColor:'black',
        height:809
    },
    
})