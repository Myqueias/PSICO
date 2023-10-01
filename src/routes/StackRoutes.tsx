import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//Arquivos de navegação
import Home from '../indexs/Home'
import Cadastro from '../indexs/Cadastro'
import Login from '../indexs/Login'
import Inicio from '../pages/Inicio'
//Interface do Conteúdo
import Psico from '../pages/InterfaceConteudo/psico.js'
import TranstornosMentais from '../pages/InterfaceConteudo/TranstornosMentais.js'
import Deficiencia from '../pages/InterfaceConteudo/pcd.js'
import Atividade from '../pages/InterfaceConteudo/at.js'
//Conteúdo -- Transtornos Mentais
import Autismo from '../pages/InterfaceConteudo/Conteudo/TranstornosMentais/Autismo.js'
import Depressao from '../pages/InterfaceConteudo/Conteudo/TranstornosMentais/Depressao.js'
import TDHA from '../pages/InterfaceConteudo/Conteudo/TranstornosMentais/TDHA.js'
import Ansiedade from '../pages/InterfaceConteudo/Conteudo/TranstornosMentais/Ansiedade.js'
import Curiosidade from '../pages/InterfaceConteudo/Conteudo/TranstornosMentais/Curiosidade.js'
//Conteúdo -- Deficiência
import Auditiva from '../pages/InterfaceConteudo/Conteudo/Deficiencia/Auditiva.js'
import Visual from '../pages/InterfaceConteudo/Conteudo/Deficiencia/Visual.js'
import Motora from '../pages/InterfaceConteudo/Conteudo/Deficiencia/Motora.js'
import Intelectual from '../pages/InterfaceConteudo/Conteudo/Deficiencia/Intelectual.js'


//Implementação com outros tipos de navegação



const Stack = createStackNavigator();
export default function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator>

                {/*Telas Iniciais*/}

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
                <Stack.Screen
                name='Inicio'
                component={Inicio}
                options={{
                    title: '',
                    headerShown: false,
                }}
                />
                <Stack.Screen
                name='Psico'
                component={Psico}
                options={{
                    title: 'Sobre a Psico',
                    headerShown: true,
                }}
                />

                {/*Interface do Conteúdo*/}

                <Stack.Screen
                name='TranstornosMentais'
                component={TranstornosMentais}
                options={{
                    title: '',
                    headerShown: true,
                }}
                />
                <Stack.Screen
                name='Deficiencia'
                component={Deficiencia}
                options={{
                    title: '',
                    headerShown: true,
                }}
                />
                <Stack.Screen
                name='Atividade'
                component={Atividade}
                options={{
                    title: '',
                    headerShown: true,
                }}
                />

                {/*Conteúdo -- Transtornos Mentais*/}

                <Stack.Screen
                name="Autismo"
                component={Autismo}
                options={{
                    title: '',
                    headerShown:true
                }}
                />
                <Stack.Screen
                name="Ansiedade"
                component={Ansiedade}
                options={{
                    title: '',
                    headerShown:true
                }}
                />
                <Stack.Screen
                name="Depressao"
                component={Depressao}
                options={{
                    title: '',
                    headerShown:true
                }}
                />
                <Stack.Screen
                name="TDHA"
                component={TDHA}
                options={{
                    title: '',
                    headerShown:true
                }}
                />
                <Stack.Screen
                name="Curiosidade"
                component={Curiosidade}
                options={{
                    title: '',
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
            </Stack.Navigator>
        </NavigationContainer>
    )
}