import { createDrawerNavigator } from "@react-navigation/drawer";

import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome5'


//CustomDrawer
import CustomDrawer from '../../assets/CustomDrawer/'

//Implementações de telas
import Inicio from  '../pages/Inicio/'
import ConfigScreen from '../Config/ConfigScreen'
import Conta from '../Config/Conta'
import Sobre from '../Config/Sobre'
import Privacidade from '../Config/Privacidade'

//Implementação com outra navegação
import TabRoutes from "./TabRoutes";

const Drawer = createDrawerNavigator();
export default function DrawerRoutes(){
    return(
        <Drawer.Navigator
        drawerContent={props => <CustomDrawer {...props}/>}
        screenOptions={{
            headerTintColor:'#fff',
            headerStyle:{
                backgroundColor:'#5E17EB'
            },
            drawerStyle:{
                backgroundColor:'#7F0CF2',
                width:240,
                },
            drawerActiveBackgroundColor:'white',
            drawerActiveTintColor:'#000',
            drawerInactiveTintColor:'#fff',
            drawerLabelStyle:{
                fontSize:18
            }
        }}
        initialRouteName="Home"
        >
            <Drawer.Screen
            name="Home"
            component={TabRoutes}
            options={{
                headerTitle:'Início',
                drawerIcon: ({color}) =>(<Ionicons name='home-outline' size={22} color={color}/>)
            }}
            />
            <Drawer.Screen
          name="Configuração Geral"
          component={ConfigScreen}
          options={{
            drawerIcon: ({color}) =>(<Ionicons name='settings-outline' size={22} color={color}/>)
        }}
          />
            <Drawer.Screen
            name="Conta"
            component={Conta}
            options={{
                drawerIcon: ({color}) =>(<Ionicons name='person-outline' size={22} color={color}/>)
            }}
            />
            <Drawer.Screen
            name="Sobre"
            component={Sobre}
            options={{
                drawerIcon: ({color}) =>(<Ionicons name='timer-outline' size={22} color={color}/>)
            }}
            />
            <Drawer.Screen
            name="Privacidade"
            component={Privacidade}
            options={{
                drawerIcon: ({color}) =>(<Ionicons name='chatbox-ellipses-outline' size={22} color={color}/>)
            }}
            />
        </Drawer.Navigator>
    )
}