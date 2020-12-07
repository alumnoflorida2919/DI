import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    StatusBar,
    FlatList,
} from 'react-native';
import { Button, Input, SearchBar } from 'react-native-elements';

export class TablaFecha extends Component {
    render() {
        return (
            <View>
                <Text style={styles.estiloTabla}>21/10/20</Text>
                <Text style={styles.estiloTabla}>21/10/20</Text>
                <Text style={styles.estiloTabla}>21/10/20</Text>
                <Text style={styles.estiloTabla}>21/10/20</Text>
                <Text style={styles.estiloTabla}>21/10/20</Text>
            </View>           
        )
    }
}
const styles = StyleSheet.create({
    estiloTabla: {
       
        flex:0.5,
        color:'orange',  
        fontSize:20, 
        borderColor:'orange',
        borderWidth:3,  
        padding:1,  
        flex:1, 
        height:100,                              
    },
});