import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import { Icon } from 'react-native-elements';

export class PlaceMyBetLogo extends Component {
    render() {
        return (
            <View>
                <Text style={styles.text}>PLACE MY BET</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    text: {
        
        padding: 8,
        color: 'orange',
        fontSize: 25,
        flexDirection: 'row',
    },
});