import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import { Icon } from 'react-native-elements';

export class TargetCabecera extends Component {
    render() {
        return (
            <View>
                <View style={styles.cabecera}>
                    <Icon name="menu" color={'grey'} size={80}></Icon>
                    <Text style={styles.textoCabecera}>PLACE MY BET</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
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
