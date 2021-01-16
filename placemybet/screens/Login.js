import React, {Component} from 'react';
import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Button, Input} from 'react-native-elements';
import {BotonOk} from '../component/BotonOk';

export default class Login extends Component {
    render() {
        return (

            <View style={styles.backGround}>
                <StatusBar barStyle="dark-content" />
                <ScrollView>

                    <View style={styles.cabecera}>
                        <Text style={styles.text}>PLACE MY BET</Text>
                    </View>
                    <Text></Text>
                    <Text></Text>
                    <View style={styles.input}>
                        <Input
                            placeholder='USER'
                            leftIcon={
                                <Icon
                                    name='user'
                                    size={24}
                                    color='white'
                                />
                            }
                        />
                    </View>
                    <Text></Text>
                    <Text></Text>
                    <View style={styles.input}>
                        <Input placeholder="PASSWORD"
                            leftIcon={
                                <Icon
                                    name='Password'
                                    size={24}
                                    color='white'
                                />
                            }
                            secureTextEntry={true} />
                    </View>
                    <Text></Text>
                    <Text></Text>
                    <BotonOk></BotonOk>
                    <Text></Text>
                    <View style={styles.botonRegistro}>
                        <Button
                            title="REGISTRARSE"
                            type='clear'
                            color='white'
                        />
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
    text: {
        padding: 8,
        color: 'orange',
        fontSize: 45,
        flexDirection: 'row',
    },
    input: {
        backgroundColor: 'grey',
        color: 'white',
        padding: 20,
        flex: 0.10,
        flexDirection: 'row',
    },
    cabecera: {
        alignItems: 'center',
        flex: 0.2,
        flexDirection: 'row',
        padding: 20,
    },
    botonInicio: {
        backgroundColor: 'orange',
        flexDirection: 'row',
        borderRadius: 30,
        flex: 0.15,
        padding: 10,
        width: 270,
        alignItems: 'center',
    },
    botonRegistro: {
        backgroundColor: 'grey',
        borderRadius: 30,
        flexDirection: 'row',
        alignItems: 'center',
        height: 60,
        paddingLeft: 25,
        paddingRight: 25,
        justifyContent: 'center',

    },
});
