import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button, Input, } from 'react-native-elements';

export class InputData extends Component{
    render(){
        return(
            <View style={styles.input}>
                    <Input
                        placeholder='NOMBRE'
                        placeholderTextColor='black'                        
                    />
                </View>
        )
    }
}
const styles = StyleSheet.create({
    input: {
        backgroundColor: 'grey',
        color: 'white',
        padding: 10,
        flex: 0.10,
        flexDirection: 'row',
        borderColor:'orange',
        borderWidth:5,
        borderRadius:15,
    },
});