import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    StatusBar,
    ScrollView,
    FlatList,
} from 'react-native';

export class AdminUsuario extends Component {
    render() {
        return (
            <View>
                <Text style={styles.usuario}>ADMIN:   USUARIO</Text>
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