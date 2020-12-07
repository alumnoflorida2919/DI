import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    StatusBar,
    ScrollView,
    FlatList,
} from 'react-native';

export class Usuario extends Component {
    render() {
        return (
            <View>
                <Text style={styles.usuario}>USUARIO</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    usuario: {
        color: 'grey',
        fontSize: 25,
        padding: 8,
    },
});