import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button, Input, } from 'react-native-elements';

export class BotonOk extends Component {
    render() {
        return (
            <View style={styles.botonInicio}>
                <Button
                    title='+DARSE ALTA'
                    type='clear'
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    botonInicio: {
        backgroundColor: 'orange',
        borderRadius: 30,
        flexDirection: 'row',
        alignItems: 'center',
        height: 60,
        paddingLeft: 25,
        paddingRight: 25,
        justifyContent: 'center',
    },
});