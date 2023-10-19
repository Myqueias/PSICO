import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp , widthPercentageToDP as wp } from "react-native-responsive-screen";

export const styles = StyleSheet.create({
    body:{
        height:hp(100),
        width:wp(100)
    },
    toptext:{
        fontSize:26,
        color:'#fff',
        padding:6
    },
    barTextTitle:{
        marginTop:9,
        height:hp(0.1),
        width:wp(89),
        backgroundColor:'#fff'
    },
    main:{
        justifyContent:'center',
    },
    barTextMain:{
        marginTop:9,
        height:hp(0.1),
        width:wp(29),
        marginLeft:20,
        backgroundColor:'#fff'
    },
    mainTextTitle:{
        marginLeft:20,
        fontSize:26,
        color:'#fff'
    },
    mainText:{
        color:'#fff',
        fontSize:18,
        padding:8
    },
    mainPointText:{
        flexDirection:'column',
        paddingLeft:wp(30)
    },
    content:{
        backgroundColor:'#fff',
        height:hp(10),
        width:wp(70),
        borderRadius:29,
        padding:10,
        margin:10,
    }
})