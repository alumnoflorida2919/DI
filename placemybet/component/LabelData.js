import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    StatusBar,
    ScrollView,
    FlatList,
} from 'react-native';
import { Input } from 'react-native-elements';

export class LabelData extends Component {
    render() {
        return (
            <View>
                <Text style={styles.label}>Dato</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    label: {
        backgroundColor: 'white',
        color: 'black',
        fontSize: 15,
        padding: 1,
        width:50,  
        
    },
});