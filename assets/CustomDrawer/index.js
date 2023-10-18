import { View, Text, Image } from 'react-native'
import React from 'react'
import { DrawerItemList } from '@react-navigation/drawer'

const CustomDrawer = (props) => {
  return (
    <View style={{flex:1,}}>
        <View style={{height:129, justifyContent:'center',alignItems:'center'}}>
          <Image
              source={require('../Zezinho_Boladao.jpg')}
              style={{height:80, width:80, borderRadius:40, marginBottom:10}}
          />
        </View>
        <Text
        style={{textAlign:'center',color:'white',fontSize:22,marginBottom:19}}
        >ZezinhoGamer</Text>
        <DrawerItemList {...props}/>
    </View>
  )
}

export default CustomDrawer