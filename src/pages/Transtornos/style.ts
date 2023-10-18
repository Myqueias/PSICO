import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
    body:{
        height:hp(100),
        width:wp(100)
    },
    top:{
    },
    toptext:{
        fontSize:23,
        color:'#fff'
    },
    barText:{
        marginTop:9,
        height:hp(0.1),
        width:wp(80),
        backgroundColor:'#fff'
    },
    main:{
        height:hp(73),
        justifyContent:'center',
        alignItems:'center',
    },
    mainText:{
        color:'#fff',
        padding:19
    },
    container:{
        backgroundColor: '#fff',
        borderRadius: 10,
        height:hp(15),
        width:wp(80),
        marginTop:19

    },
    fotter:{
        alignItems:'center',
        justifyContent:'center',
        height:hp(10)
    },

})