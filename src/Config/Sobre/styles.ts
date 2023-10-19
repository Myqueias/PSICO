import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp , widthPercentageToDP as wp } from "react-native-responsive-screen";

export const styles = StyleSheet.create({
    body:{
        height: hp(120),
        justifyContent: 'center',
        alignItems:'center'
    },
    module:{
        borderRadius:10,
        width:359,
        height: hp(112),
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems:'center',
        padding:15
    },
    fotter:{
        height:hp(8),
        justifyContent: 'center',
        alignItems:'center'
    },
})