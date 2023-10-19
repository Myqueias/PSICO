import { StyleSheet } from "react-native";;
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

export const styles = StyleSheet.create({
    container: {
      padding: 20,
      height: hp(100)
    },
    titleLogin: {
      color: '#fff',
      fontSize: 50,
      marginLeft:10,
      marginTop:200,
    },
    inputext: {
      marginTop: 30,
      width:wp(89) ,
      height: hp(5),
      backgroundColor: "#fff",
      borderRadius: 20,
      paddingLeft:10, 
    },
   botao: {
      marginTop: 30,
      border: 30,
      width:wp(89) ,
      height: hp(5),
      backgroundColor: '#fff',
      justifyContent: "center",
      borderRadius: 20,
    },
  });
  