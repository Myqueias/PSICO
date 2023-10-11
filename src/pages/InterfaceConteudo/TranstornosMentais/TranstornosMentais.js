import { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import Collapsible from 'react-native-collapsible';
import { styles } from './TranstornosMentaisStyle'

export default function TranstornosMentais({navigation}){
    const [autismoCollapsed,setAutismoCollapsed]= useState(true);
    const [ansiedadeCollapsed,setAnsiedadeCollapsed]= useState(true);
    const [depressaoCollapsed,setDepressaoCollapsed]= useState(true);
    const [tdhaCollapsed,setTdhaCollapsed]= useState(true);
    const toogleExpandAutismo = ()=>{
        setAutismoCollapsed(!autismoCollapsed)    
    }
    const toogleExpandAnsiedade = ()=>{
        setAnsiedadeCollapsed(!ansiedadeCollapsed)    
    }
    const toogleExpandDepressao = ()=>{
        setDepressaoCollapsed(!depressaoCollapsed)    
    }
    const toogleExpandTDHA = ()=>{
        setTdhaCollapsed(!tdhaCollapsed)    
    }
    return(
        <ScrollView
        contentContainerStyle={{flex:1}}>
            <View style={styles.body}>
                <View style={styles.module}>

                    <Text style={{fontSize:28, color:'white'}}>Informações</Text>
                    

                    <TouchableOpacity style={styles.TouchableOpacity}
                    onPress={toogleExpandAutismo}
                    >
                            <Text style={styles.text}>Autismo</Text>
                    </TouchableOpacity>
                    <Collapsible collapsed={autismoCollapsed} 
                    style={styles.contentCollapsible}>
                        <Text style={styles.contentText}>
                        O autismo é um distúrbio neurológico que afeta o desenvolvimento social, 
                        de comunicação e comportamental de uma pessoa. Caracteriza-se por diferenças 
                        individuais significativas, mas geralmente envolve dificuldades na interação 
                        social, comunicação não verbal e comportamentos repetitivos.
                        </Text>

                        <TouchableOpacity
                        onPress={()=>{navigation.navigate('Autismo')}}>
                            <View
                            style={styles.button}
                            >
                                <Text>Saiba mais</Text>
                            </View>
                        </TouchableOpacity>

                    </Collapsible>


                    <TouchableOpacity style={styles.TouchableOpacity}
                    onPress={toogleExpandAnsiedade}
                    >
                            <Text style={styles.text}>Ansiedade</Text>
                    </TouchableOpacity>
                    <Collapsible collapsed={ansiedadeCollapsed} style={[styles.contentCollapsible, {height:239}]}>
                        <Text style={styles.contentText}>
                        A ansiedade é uma resposta natural do corpo ao estresse, mas pode se tornar um problema quando é excessiva ou persistente. Ela envolve preocupação, medo e tensão intensos em relação a situações futuras.
                        </Text>

                        <TouchableOpacity
                        onPress={()=>{navigation.navigate('Ansiedade')}}>
                            <View
                            style={styles.button}
                            >
                                <Text>Saiba mais</Text>
                            </View>
                        </TouchableOpacity>
                    </Collapsible>


                    <TouchableOpacity style={styles.TouchableOpacity}
                    onPress={toogleExpandDepressao}
                    >
                            <Text style={styles.text}>Depressão</Text>
                    </TouchableOpacity>
                    <Collapsible collapsed={depressaoCollapsed} style={[styles.contentCollapsible, {height:209}]}>
                        <Text style={styles.contentText}>
                        
                        A depressão é um distúrbio mental que envolve sentimentos persistentes de tristeza, desânimo, perda de interesse ou prazer em atividades, e pode afetar o funcionamento diário.

                        </Text>

                        <TouchableOpacity
                        onPress={()=>{navigation.navigate('Depressao')}}>
                            <View
                            style={styles.button}
                            >
                                <Text>Saiba mais</Text>
                            </View>
                        </TouchableOpacity>
                    </Collapsible>


                    <TouchableOpacity style={styles.TouchableOpacity}
                    onPress={toogleExpandTDHA}
                    >
                            <Text style={styles.text}>TDHA</Text>
                    </TouchableOpacity>
                    <Collapsible collapsed={tdhaCollapsed} style={[styles.contentCollapsible, {height:219}]}>
                        <Text style={styles.contentText}>
                        O TDAH, Transtorno do Déficit de Atenção com Hiperatividade, é uma condição neurobiológica que afeta a capacidade de concentração, controle de impulsos e hiperatividade/impulsivi-dade..
                        </Text>

                        <TouchableOpacity
                        onPress={()=>{navigation.navigate('TDHA')}}>
                            <View
                            style={styles.button}
                            >
                                <Text>Saiba mais</Text>
                            </View>
                        </TouchableOpacity>
                    </Collapsible>

                    <TouchableOpacity style={styles.TouchableOpacity}
                    onPress={()=>{navigation.navigate('Curiosidade')}}
                    >
                            <Text style={styles.text}>Curiosidades</Text>
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

