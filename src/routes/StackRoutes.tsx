import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//Telas de login
import Home from '../indexs/Home';
import Cadastro from '../indexs/Cadastro';
import Login from '../indexs/Login';

//Interface do Conteúdo
import Inicio from '../pages/Inicio/'
import TranstornosMentais from '../pages/InterfaceConteudo/TranstornosMentais/TranstornosMentais.js'
import Deficiencia from '../pages/InterfaceConteudo/Deficientes/pcd.js'
import Atividade from '../pages/InterfaceConteudo/Atividade/at.js'
//Conteúdo -- Transtornos Mentais
import Autismo from '../pages/InterfaceConteudo/content/TranstornosMentais/Autismo.js'
import Depressao from '../pages/InterfaceConteudo/content/TranstornosMentais/Depressao.js'
import TDHA from '../pages/InterfaceConteudo/content/TranstornosMentais/TDHA.js'
import Ansiedade from '../pages/InterfaceConteudo/content/TranstornosMentais/Ansiedade.js'
import Curiosidade from '../pages/InterfaceConteudo/content/TranstornosMentais/Curiosidade.js'
//Conteúdo -- Deficiência
import Auditiva from '../pages/InterfaceConteudo/content/Deficiencia/Auditiva.js'
import Visual from '../pages/InterfaceConteudo/content/Deficiencia/Visual.js'
import Motora from '../pages/InterfaceConteudo/content/Deficiencia/Motora.js'
import Intelectual from '../pages/InterfaceConteudo/content/Deficiencia/Intelectual.js'

//Arquivos de Configuração
import DrawerRoutes from './DrawerRoutes';


const Stack = createStackNavigator();

export default function StackRoutes(){
    return(
        <Stack.Navigator
        screenOptions={{
            headerTitle:''
        }}
        >

            {/*Telas de Login*/}
            <Stack.Screen 
            name="Home" 
            component={Home}
            options={{
                title: '',
                headerShown: false,
            }}
            />
            <Stack.Screen 
            name="Cadastro" 
            component={Cadastro}
            options={{
                title: 'Cadastre-Se',
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#6b2f68'
                }
            }}
            />
            <Stack.Screen
            name="Login"
            component={Login}
            options={{
                title: 'Login',
                headerShown: true,
                headerStyle:{
                    backgroundColor: '#6b2f68'  
                }
            }
        }
        />

                {/*Telas Iniciais*/}
                <Stack.Screen
                name='Inicio'
                component={DrawerRoutes}
                options={{
                    title: '',
                    headerShown: false,
                }}
                />

                {/*Interface do Conteúdo*/}
                <Stack.Screen
                name='TranstornosMentais'
                component={TranstornosMentais}
                options={{
                    title: 'Transtornos Mentais',
                    headerShown: true,
                }}
                />
                <Stack.Screen
                name='Deficiencia'
                component={Deficiencia}
                options={{
                    title: 'Deficiências',
                    headerShown: true,
                }}
                />
                <Stack.Screen
                name='Atividade'
                component={Atividade}
                options={{
                    title: 'Atividades',
                    headerShown: true,
                }}
                />

                {/*Conteúdo -- Transtornos Mentais*/}
                <Stack.Screen
                name="Autismo"
                component={Autismo}
                options={{
                    title: 'Autismo',
                    headerShown:true
                }}
                />
                <Stack.Screen
                name="Ansiedade"
                component={Ansiedade}
                options={{
                    title: 'Ansiedade',
                    headerShown:true
                }}
                />
                <Stack.Screen
                name="Depressao"
                component={Depressao}
                options={{
                    title: "Depressao",
                    headerShown:true
                }}
                />
                <Stack.Screen
                name="TDHA"
                component={TDHA}
                options={{
                    title: 'Transtorno do déficit de atenção com hiperatividade',
                    headerShown:true
                }}
                />
                <Stack.Screen
                name="Curiosidade"
                component={Curiosidade}
                options={{
                    title: 'Curiosidade',
                    headerShown:true
                }}
                />

            {/*Conteúdo -- Deficiência*/}
                 <Stack.Screen
                    name="Auditiva"
                    component={Auditiva}
                    options={{
                        title: '',
                        headerShown:true
                    }}
                    />
                <Stack.Screen
                    name="Visual"
                    component={Visual}
                    options={{
                        title: '',
                        headerShown:true
                    }}
                    />
                <Stack.Screen
                    name="Motora"
                    component={Motora}
                    options={{
                        title: '',
                        headerShown:true
                    }}
                    />
                <Stack.Screen
                    name="Intelectual"
                    component={Intelectual}
                    options={{
                        title: '',
                        headerShown:true
                    }}
                    />
                 {/*Ajustes -- Preferências*/}
          
        </Stack.Navigator>
    )
}