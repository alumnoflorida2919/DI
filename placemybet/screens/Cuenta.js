import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    StatusBar,
    ScrollView,
} from 'react-native';

import { PlaceMyBetLogo } from '../component/PlaceMyBetLogo';
import { Usuario } from '../component/Usuario';

export default class Cuenta extends Component {
    render() {
        return (
            <View style={styles.backGround}>
                <StatusBar barStyle="dark-content" />
                <PlaceMyBetLogo></PlaceMyBetLogo>
                <Usuario></Usuario>
                <ScrollView>
                    <Text></Text>
                    <View style={styles.cajasApuestas}>
                        <Text>NOMBRE:</Text>
                    </View>
                    <View style={styles.cajasApuestas}>
                        <Text>APELLIDOS:</Text>
                    </View>
                    <View style={styles.cajasApuestas}>
                        <Text>EDAD:</Text>
                    </View>
                    <Text></Text>
                    <View style={styles.cajasApuestas}>
                        <Text>EMAIL:</Text>
                    </View>
                    <Text></Text>
                    <View style={styles.cajasApuestas}>
                        <Text>SALDO:</Text>
                    </View>
                    <View style={styles.cajasApuestas}>
                        <Text>BANCO:</Text>
                    </View>
                    <View style={styles.cajasApuestas}>
                        <Text>Nº CUENTA:</Text>
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
    input: {
        backgroundColor: 'white',
        color: 'white',
        padding: 10,
        flex: 0.10,
        flexDirection: 'row',
        borderRadius: 15,
    },
    cajasApuestas: {
        flex: 1,
        //justifyContent:'center',
        borderRadius: 3,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 25,
        backgroundColor: 'white',
    },
});