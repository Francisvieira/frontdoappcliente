import * as React from 'react'
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import { styles } from '../css/Styles';
import { servidor } from '../config/path';
export default function Login({navigation}) {
    return (
        <View style={styles.container}>
            <Image source={require("../assets/icon.png")} style={styles.imglogo}/>
            <View style={styles.controles}>
                <TextInput placeholder="Usuario" style={styles.input}/>
                <TextInput placeholder="Senha" style={styles.input} secureTextEntry/>

                <TouchableOpacity style={styles.btnlogar} onPress={()=>{
                    navigation.navigate("Home");
                }}>
                    <Text style={styles.txtbtnlogar}>Logar</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.btncadastrar} onPress={()=>{
                navigation.navigate("Cadastro");
            }}>
                    <Text  style={styles.txtbtncadastrar}>Cadastrar</Text>
                </TouchableOpacity>

        </View>
    );
}