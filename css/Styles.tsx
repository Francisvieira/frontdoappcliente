import { StyleSheet } from "react-native";

export const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#e0ffff'
    },
    imglogo:{
        width:100,
        height:100,
        resizeMode:"cover",
        borderRadius:35
    },
    input:{
        borderBottomColor:'#ddd',
        borderBottomWidth: 1,
        padding:5,
        marginBottom:10,
        fontSize:15

    }, 
    controles:{
        width:'80%',
        padding:10,
        margin:20,
        shadowColor:'black',
        shadowOffset:{width:10,height:10},
        shadowOpacity:0.8,
        shadowRadius:10,
        elevation:10,
        backgroundColor:'white'
    },
    btnlogar:{
        padding:30,

    },
    txtbtnlogar:{
        textAlign:'center',
        color:'teal'

    },
    btncadastrar:{
        position:"absolute",
        bottom:30,
        backgroundColor:'#5f9ea0',
        padding:20,
        borderRadius:50,
        

    },
    txtbtncadastrar:{
        fontSize:30,
        fontWeight:'bold',
        color:'white',
        textTransform:'uppercase'
    }
        
    
})