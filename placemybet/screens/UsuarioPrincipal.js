import React, { Component } from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';
import { Header} from 'react-native-elements';
import { TargetCabecera } from '../component/TargetCabecera';
import { TargetEquipos } from '../component/TargetEquipos';

export default class UsuarioPrincipal extends Component {
    render() {
        return (
            <View style={styles.backGround}>
                <StatusBar barStyle="dark-content" />
                <Header
                    backgroundColor="orange"
                    leftComponent={{ icon: 'menu', color: 'black' }}
                    centerComponent={{ text: 'PLACE MY BET', style: { color: '#black' } }}
                    
                />
                
                <View>
                    <Text></Text>
                    <Text style={styles.textoUsuario}>USUARIO</Text>
                    <Text></Text>
                </View>
                <ScrollView>
                    <View>
                        <TargetEquipos></TargetEquipos>
                        <TargetEquipos></TargetEquipos>
                        <TargetEquipos></TargetEquipos>
                        <TargetEquipos></TargetEquipos>
                        <TargetEquipos></TargetEquipos>
                        <TargetEquipos></TargetEquipos>
                    </View>
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    backGround: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
    },
    textoUsuario: {
        padding: 8,
        color: 'grey',
        fontSize: 18,
    },
    cabecera: {
        padding: 40,
        flex: 1,
        justifyContent: 'space-between',
        //justifyContent: 'center',     
        backgroundColor: 'orange',
        flexDirection: 'row',
    },
    textoCabecera: {
        fontSize: 25,
        textAlign: 'right',
        color: 'grey',
    }
});
