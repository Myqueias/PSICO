import { createDrawerNavigator } from "@react-navigation/drawer";
import Inicio from  '../pages/Inicio/'
import ConfigScreen from '../Config/ConfigScreen'
import Conta from '../Config/Conta'
import Sobre from '../Config/Sobre'
import Privacidade from '../Config/Privacidade'
import Gerais from '../Config/Gerais'

const Drawer = createDrawerNavigator();
export default function DrawerRoutes(){
    return(
        <Drawer.Navigator
        screenOptions={{
            drawerStyle:{
                backgroundColor:'#7F0CF2',
                width:240,
                },
            drawerActiveBackgroundColor:'white',
            
        }}
        >
            <Drawer.Screen
            name="Inicio"
            component={Inicio}
            options={{
                title: '',
            }}
            />
            <Drawer.Screen
          name="Configuração Geral"
          component={ConfigScreen}
          />
            <Drawer.Screen
            name="Gerais"
            component={Gerais}
            />
            <Drawer.Screen
            name="Conta"
            component={Conta}
            />
            <Drawer.Screen
            name="Sobre"
            component={Sobre}
            />
            <Drawer.Screen
            name="Privacidade"
            component={Privacidade}
            />
        </Drawer.Navigator>
    )
}