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
       // position:"absolute",
       // bottom:30,
        backgroundColor:'#5f9ea0',
        padding:10,
        borderRadius:50,
        

    },
    txtbtncadastrar:{
        fontSize:20,
        fontWeight:'bold',
        color:'white',
        textTransform:'uppercase',
        textAlign:"center"
    },
    titulo:{
        fontSize:20,
        fontWeight:'bold',
        textAlign:"center",
    },
    imgcliente:{
        width:500,
        
        resizeMode:'cover',
        height:300

    },
    cliente:{
        width:400,
        height:200,
        padding:20,
        backgroundColor:'white',
        shadowColor:'silver',
        shadowOffset:{width:10, height:10},
        shadowOpacity:1,
        shadowRadius:10,
        elevation:10 
    },
    nome:{
        fontSize:12,
        fontWeight:'bold'
        
    },
    cpf:{
      fontWeight:'bold',
        fontSize:12
    },
    email:{
       fontSize:15,
       color:"#f00",
       fontWeight:'bold'

    },
    usuario:{
      fontSize:15,
      color:"teal",
      fontWeight:"bold"
    },
    scroll:{

    }
        
    
})