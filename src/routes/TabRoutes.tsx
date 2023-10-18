import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Foundation from 'react-native-vector-icons/Foundation'

import Inicial from '../pages/Inicio'
import Transtornos from '../pages/Transtornos/'


const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
      <Tab.Navigator
      screenOptions={{
        headerTitle:'',
        headerStyle:{
          height:0,
        },
        tabBarActiveTintColor:'white',
        tabBarInactiveTintColor:'black',
        tabBarStyle:{
          backgroundColor:'#CB6CE6',
        }
        }}
      >
        <Tab.Screen 
        name="Inicial" 
        component={Inicial}
        options={{
          tabBarIcon:({color, size, focused})=>{
            if(focused){
              return <Ionicons name="home" size={size} color={color}/>
            }
            return <Ionicons name="home-outline" size={size} color={color}/>
        }} 
        } 
 />
        <Tab.Screen 
        name="Transtornos" 
        component={Transtornos}
        options={{
          tabBarIcon:({color, size, focused})=>{
            if(focused){
              return <Foundation name="wheelchair" size={size} color={color}/>
            }
            return <Foundation name='blind' size={size} color={color}/>
        }} 
        } 
 />
      </Tab.Navigator>
  );
}