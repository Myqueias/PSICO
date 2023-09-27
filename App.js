import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from './src/pages/Home'
import Cadastro from './src/pages/Cadastro'
import Login from './src/pages/Login'
import Inicio from './src/pages/Inicio'
import Psico from './src/pages/Conteudo/psico.js'
const Stack = createStackNavigator();
const name = 'Zezinho'
export default function App(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
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
            </Stack.Navigator>
        </NavigationContainer>
    )
}