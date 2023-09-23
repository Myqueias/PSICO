import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container:{
      backgroundColor: '#430596',
    },
    top:{
        height: 45,
        with:'100%',
        backgroundColor: 'purple',
    },
    head:{
        backgroundColor: '#580A80',
        height: 460,
        marginTop:20,
        borderRadius:20
    },
    body:{
        backgroundColor: '#580A80',
        height: 900,
        marginTop:20,
        borderRadius:20
    },
    div:{
        marginTop: 30,
        border: 30,
        borderRadius: 20,
        width: '90%',
        height: 150,
        justifyContent: "center",
        marginHorizontal:24,
        backgroundColor:'white',
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20
    },
    text:{
        fontSize:38,
        color:'white'
    },
    img:{
        width:'100%', 
        height:150, 
        borderRadius:10,
        position: 'absolute'
    },
    butto:{
        border: 30,
        width: 150,
        height: 40,
        backgroundColor: 'white',
        justifyContent: "center",
        alignItems:"center",
        borderRadius: 20,
        marginLeft:'60%',
        marginTop:30
    }
})