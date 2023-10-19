import React from 'react';
import { View, Text, Image } from 'react-native'
import { DrawerItemList } from '@react-navigation/drawer';
import { heightPercentageToDP as hp , widthPercentageToDP as wp } from "react-native-responsive-screen";

const CustomDrawer = (props) => {
  return (
    <View style={{flex:1,}}>
        <View style={{height:hp(20), justifyContent:'center',alignItems:'center'}}>
          <Image
              source={require('../Zezinho_Boladao.jpg')}
              style={{height:hp(10), width:wp(20), borderRadius:40}}
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