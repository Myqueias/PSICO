import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export const styles = StyleSheet.create({
    tela:{
        height: hp(103),
    },
    titulo:{
        marginTop:10,
        textAlign: 'center',
        color: 'white',
        fontSize: 30
    },
    img: {
        height:hp(100),
        width:wp(100)
    },
    botao: {
        marginTop: 29,
        border: 30,
        width: wp(63),
        height: hp(6),
        backgroundColor: '#fff',
        justifyContent: "center",
        alignItems:'center',
        borderRadius: 20,
        opacity:0.5,

    }
    });