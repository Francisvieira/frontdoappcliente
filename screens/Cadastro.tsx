import * as React from 'react'
import { Alert } from 'react-native';
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { servidor} from '../config/Path';
import { styles } from '../css/Styles';

let nome = "";
let email = "";
let cpf = "";
let usuario = "";
let senha = "";

export default function Cadastro() {
    // vamos criar o estado inicial das caixas do 
    //formulario 
    const [nomeCliente, setnomeCliente] = React.useState("");
    const [emailCliente, setemailCliente] = React.useState("");
    const [cpfCliente, setcpfCliente] = React.useState("");
    const [usuarioCliente, setusuarioCliente] = React.useState("");
    const [senhaCliente, setsenhaCliente] = React.useState("");



    return (

        <View style={styles.container}>
            <Text style={styles.titulo}> Cadastro Cliente </Text>
            <View style={styles.controles}>
                <TextInput placeholder="Nome do Cliente"

                    style={styles.input} onChangeText={(value) => setnomeCliente(value)}
                    value={nomeCliente}
                />

                <TextInput placeholder="CPF" keyboardType="number-pad" style={styles.input} value={cpfCliente} onChangeText={(value) => setcpfCliente(value)} />

                <TextInput placeholder="Email" keyboardType="email-address" style={styles.input} value={emailCliente} onChangeText={(value) => setemailCliente(value)} />

                <TextInput placeholder="Usuário" style={styles.input} value={usuarioCliente} onChangeText={(value) => setusuarioCliente(value)} />

                <TextInput placeholder="Senha" secureTextEntry style={styles.input} value={senhaCliente} onChangeText={(value) => setsenhaCliente(value)} />

                <TouchableOpacity style={styles.btncadastrar}
                    onPress={() => {
                        nome = nomeCliente;
                        email = emailCliente;
                        cpf = cpfCliente;
                        usuario = usuarioCliente;
                        senha = senhaCliente

                        efetuarCadastro();

                        setnomeCliente("");
                        setemailCliente("");
                        setcpfCliente("");
                        setusuarioCliente("");
                        setsenhaCliente("")
                    }}>
                    <Text style={styles.txtbtncadastrar}>Casdastrar</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}
function efetuarCadastro() {
    //faremos um fetch , ou seja uma busca de dados 
    // por uma url em javascript


    fetch(`${servidor}/cadastro`, {
        method: "POST",
        headers: {
            accept: "application/json",
            "content-type": "application/json"
        },
        body: JSON.stringify({
            nome: nome,
            email: email,
            cpf: cpf,
            usuario: usuario,
            senha: senha,
        })
    }).then((response) => response.json())
        .then((resultado) => {
            Alert.alert("Aviso",resultado.output);
           // console.log(resultado)
        }).catch((erro) => console.error(`Erro ao executar ->${erro}`));
}

