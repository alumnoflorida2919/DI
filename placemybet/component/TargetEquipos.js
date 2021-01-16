import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import { Image } from 'react-native-elements';

export class TargetEquipos extends Component {
    render() {
        return (
            <View style={styles.cajasApuestas}>
                <Image
                    source={{
                        uri:
                            'https://seeklogo.com/images/V/Valencia-logo-1CD5C7F53E-seeklogo.com.png',
                    }}
                    style={{ width: 50, height: 75 }}
                />
                <Text style={styles.guionApuestas}>-</Text>
                <Image
                    source={{
                        uri:
                            'https://seeklogo.com/images/R/real-sociedad-logo-E1EA64206C-seeklogo.com.png',
                    }}
                    style={{ width: 50, height: 75 }}
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    cajasApuestas: {
        flex: 1,
        //justifyContent:'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderColor: 'grey',
        borderWidth: 3,
        margin: 4,
        padding: 1,
        backgroundColor: 'grey',
    },
    guionApuestas: {
        color: '#433d3c',
        //display:'flex',
        //justifyContent:'center',
        //alignItems:'center',
        //textAlign:'center',
        fontSize: 100,
    }
});