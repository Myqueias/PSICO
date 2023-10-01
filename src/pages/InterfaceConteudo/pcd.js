import { useState } from "react";
import { ScrollView,  Text, TouchableOpacity, View } from "react-native";
import Collapsible from 'react-native-collapsible';
import { styles } from './pcdStyle'

export default function TranstornosMentais({navigation}){
    const [auditivaCollapsed,setAuditivaCollapsed]= useState(true);
    const [visualCollapsed,setVisualCollapsed]= useState(true);
    const [motoraCollapsed,setMotoraCollapsed]= useState(true);
    const [intelectualCollapsed,setIntelectualCollapsed]= useState(true);
    
    const toogleExpandAuditiva = ()=>{
        setAuditivaCollapsed(!auditivaCollapsed)    
    }
    const toogleExpandVisual = ()=>{
        setVisualCollapsed(!visualCollapsed)    
    }
    const toogleExpandMotora = ()=>{
        setMotoraCollapsed(!motoraCollapsed)    
    }
    const toogleExpandIntelectual = ()=>{
        setIntelectualCollapsed(!intelectualCollapsed)    
    }

    return(
        <ScrollView>
            <View style={styles.body}>
                <View style={styles.module}>

                    <Text style={{fontSize:22, color:'white'}}>Informações - Deficiências</Text>
                    
                    <TouchableOpacity 
                    style={styles.TouchableOpacity}
                    onPress={toogleExpandAuditiva}
                    >
                            <Text style={styles.text}>Auditiva</Text>
                    </TouchableOpacity>
                    <Collapsible collapsed={auditivaCollapsed} style={{backgroundColor:'white', borderRadius:10}}>
                        <Text style={{fontSize:20, color:'black'}}>
                        A deficiência auditiva é uma condição em que uma pessoa tem dificuldade em ouvir sons, variando de perda auditiva leve a profunda. 
                        </Text>
                    </Collapsible>


                    <TouchableOpacity 
                    style={styles.TouchableOpacity}
                    onPress={toogleExpandVisual}
                    >
                            <Text style={styles.text}>Visual</Text>
                    </TouchableOpacity>
                    <Collapsible collapsed={visualCollapsed} style={{backgroundColor:'white', borderRadius:10}}>
                        <Text style={{fontSize:20, color:'black'}}>
                        A deficiência visual é uma condição em que uma pessoa tem limitações na capacidade de ver, variando de baixa visão à cegueira completa. 
                        </Text>
                    </Collapsible>


                    <TouchableOpacity 
                    style={styles.TouchableOpacity}
                    onPress={toogleExpandMotora}
                    >
                            <Text style={styles.text}>Motora</Text>
                    </TouchableOpacity>
                    <Collapsible collapsed={motoraCollapsed} style={{backgroundColor:'white', borderRadius:10}}>
                        <Text style={{fontSize:20, color:'black'}}>
                        A deficiência motora é uma condição em que uma pessoa enfrenta limitações na coordenação motora e na habilidade de mover partes do corpo devido a problemas neuromusculares, lesões ou condições médicas. 
                        </Text>
                    </Collapsible>


                    <TouchableOpacity 
                    style={styles.TouchableOpacity}
                    onPress={toogleExpandIntelectual}
                    >
                            <Text style={styles.text}>Intelectual</Text>
                    </TouchableOpacity>
                    <Collapsible collapsed={intelectualCollapsed} style={{backgroundColor:'white', borderRadius:10}}>
                        <Text style={{fontSize:20, color:'black'}}>
                        A deficiência intelectual é uma condição em que uma pessoa apresenta limitações significativas na capacidade de aprender e compreender informações, bem como na adaptação às demandas diárias. 
                        </Text>
                    </Collapsible>


                    <TouchableOpacity 
                    style={styles.TouchableOpacity}
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

