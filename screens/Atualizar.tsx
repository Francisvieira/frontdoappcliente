import * as React from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import { styles } from '../css/Styles'


export default function Atualizar({route}){
    const {cliente} = route.params;
    console.log(`Tela atualizar ${cliente}`)
    return(
        <View style={styles.container}>
            <Text> tela de Atualizar</Text>
        </View>
    )
}