import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

export const styles = StyleSheet.create({
    container:{
        height:hp(100)
    },
    content:{
        justifyContent:'center',
        alignItems:'center',
        paddingTop:49
    },
    Title:{
        fontSize:39,
    },
    header:{
        backgroundColor:'#fff',
        height:hp(26),
        width:wp(80),
        borderRadius:19,
        justifyContent:'center',
        alignItems:'center',
        marginTop:29,
    },
    headerText:{
        fontSize:19,
        marginTop:6
    },
    contentMain:{
        marginTop:39,
        height:hp(7),
        width:wp(80),
        backgroundColor:'#fff',
        borderRadius:9,
        justifyContent:'center',
        alignItems:'center'
    },
    contentText:{
        fontSize:19
    },
    fotterText:{
        fontSize:19,
        color:'red'
    },
})