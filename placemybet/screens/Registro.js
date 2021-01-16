import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    StatusBar,
    ScrollView,
} from 'react-native';
import { Input, } from 'react-native-elements';
import { Background } from '../component/Background';//no me hace el fondo negro
import { BotonOk } from '../component/BotonOk';

export default class Registro extends Component {
    render() {
        return (
            <View style={styles.backGround}>
                <StatusBar barStyle="dark-content" />
                <Text></Text>
                <View style={{ justifyContent: 'center' }}>
                    <Text style={styles.text}>PLACE MY BET</Text>
                </View>
                <Text></Text>
                <ScrollView>
                    <View style={styles.input}>
                        <Input
                            placeholder='EMAIL'
                        />
                    </View>
                    <Text></Text>
                    <Text></Text>
                    <View style={styles.input}>
                        <Input
                            placeholder='NOMBRE'
                        />
                    </View>
                    <Text></Text>
                    <Text></Text>
                    <View style={styles.input}>
                        <Input
                            placeholder='APELLIDOS'
                        />
                    </View>
                    <Text></Text>
                    <Text></Text>
                    <View style={styles.input}>
                        <Input
                            placeholder='FEHA NACIMIENTO'
                        />
                    </View>
                    <Text></Text>
                    <Text></Text>
                    <View style={styles.input}>
                        <Input
                            placeholder='NUMERO CUENTA'
                        />
                    </View>
                    <Text></Text>
                    <BotonOk></BotonOk>
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
        backgroundColor: 'grey',
        color: 'white',
        padding: 20,
        flex: 0.10,
        flexDirection: 'row',
    },
    text: {

        color: 'orange',
        fontSize: 45,
    },
});