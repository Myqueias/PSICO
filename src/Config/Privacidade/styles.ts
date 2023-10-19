import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp , widthPercentageToDP as wp } from "react-native-responsive-screen";

export const styles = StyleSheet.create(
    {
        container:{
            flex:1,
            backgroundColor:'#fff',
            paddingHorizontal:32
        },
        title:{
            fontSize:32,
            color:'#000',
            fontWeight:'bold',
            paddingHorizontal:69
        },
        text:{
            color:'#000',
            fontSize:18,
            marginVertical:29
        },
        content:{
            paddingTop:100
        },
        division:{
            backgroundColor:'purple',
            height:hp(0.3),
            width:wp(78),
            marginTop:18
        }
    }
)