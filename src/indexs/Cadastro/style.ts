import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

export const styles = StyleSheet.create({
    container: {
      height: hp(100),
      width:wp(100)
    },
    titleCadastro: {
      color: '#fff',
      fontSize: 50,
      marginLeft:10,
      marginTop:200,
    },
    barText:{
      marginTop:9,
      height:hp(0.1),
      width:wp(80),
      backgroundColor:'#fff'
  },
    inputext: {
      marginTop: 32,
      width: wp(89) ,
      height: hp(5),
      backgroundColor: "white",
      borderRadius: 23,
      paddingLeft:12, 
    },
   botao: {
      marginTop: 30,
      border: 30,
      width: wp(89) ,
      height: hp(5),
      backgroundColor: '#fff',
      justifyContent: "center",
      alignItems:'center',
      borderRadius: 20,
    },
  });
  