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
        fontSize:28
    },
    main:{
        height:hp(73),
        justifyContent:'center',
        alignItems:'center',
    },
    container:{
        backgroundColor: '#fff',
        borderRadius: 10,
        height:hp(15),
        width:wp(80),
        marginTop:19,

    },
    fotter:{
        alignItems:'center',
        justifyContent:'center',
        height:hp(10)
    },

})