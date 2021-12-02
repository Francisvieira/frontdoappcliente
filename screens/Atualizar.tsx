import * as React from 'react'
import { View, Text, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import { servidor } from '../config/Path';
import { styles } from '../css/Styles'
import { AntDesign } from '@expo/vector-icons';
import { Alert } from 'react-native';

let idcliente = "";
let nome = "";
let email = "";
let rs = "";

export default function Atualizar({ route }) {
    const { cliente } = route.params;
    const { token } = route.params;
    console.log(`token atualizar ${token}`)
    console.log(`Tela atualizar ${cliente}`)
    const [nomeCliente, setNomeCliente] = React.useState(cliente.nome);
    const [emailCliente, setEmail] = React.useState(cliente.email);


    idcliente = cliente._id

    return (

        <View style={styles.container}>
            <Text style={styles.titulo}> Atualizar dados</Text>
            <View style={styles.controles}>

                <TextInput placeholder="Nome do Cliente" style={styles.input}
                    value={nomeCliente}
                    onChangeText={(value) => setNomeCliente(value)}
                />

                <TextInput placeholder="Email" keyboardType="email-address" style={styles.input}
                    value={emailCliente}
                    onChangeText={(value) => setEmail(value)}

                />

                <TouchableOpacity style={styles.btnlogar} onPress={() => {
                    nome = nomeCliente;

                    email = emailCliente;

                    efetuarAtualizacao();

                    setNomeCliente('');

                    setEmail('');

                }}>
                    <Text style={styles.btnlogar}> Atualizar dados</Text>
                </TouchableOpacity>

            </View>
            <TouchableOpacity style={styles.apagar} onPress={() => {
                excluirUsuario();
            }}>
                <AntDesign name="delete" size={24} color="black" />
                <Text style={styles.txtbtnapagar}> Apagar a conta </Text>
            </TouchableOpacity>
        </View>
    )

}

function efetuarAtualizacao() {
    fetch(`${servidor}/atualizar/${idcliente}`, {
        method: 'PUT',
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            token: rs
        },

        body: JSON.stringfy({
            nome: nome,
            email: email
        }),
    })
        .then((response) => response.json())
        .then((rs) => {
            Alert.alert("Atualizacao,", rs.output);

        })

        .catch((erro) => console.error(`Erro ao tentar ler api-> ${erro}`));
}
let r = false;
function excluirUsuario() {
    Alert.alert("Atenção", "Voçe realmente quer apagar essa conta?", [
        {
            text: "Cancelar",
            onPress: () => console.log("Cancelou")
        },
        {
            text: "Apagar",
            onPress: () =>{
                fetch(`${servidor}/apagar/${idcliente}`, {
                    method: "DELETE",
                    headers: {
                        accept: "application/json",
                        "content-type": "application/json",
                        "token": rs
                    },
                }).then((response) => response.status)
                .then((dados) => {
                    if (dados.toString()=="204") {
                         Alert.alert("apagado", "Conta apagada");
                    }
                    else {
                        Alert.alert("Atencao", "não foi possivel apagar os dados");
                    }
                })
                    .catch((erro) => console.error(`Erro ao ler a api ->${erro}`));
            }
        }
    ]);
   
    }





