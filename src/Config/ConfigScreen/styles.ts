import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#EBA4FF',

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
        height:209,
        width:239,
        borderRadius:19,
        justifyContent:'space-around',
        alignItems:'center'
        ,marginTop:29,
    },
    headerText:{
        fontSize:19,
        fontWeight:'200',
        marginTop:6
    },
    contentMain:{
        marginTop:39,
        height:69,
        width:338,
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