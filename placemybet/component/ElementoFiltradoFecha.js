import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';

export class ElementoFiltradoFecha extends Component {
    render() {
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>                       
                            
            <Text style={styles.estiloTabla}>{this.props.fecha}</Text>                            
            <Text style={styles.estiloTabla}>{this.props.tp}</Text>                           
            <Text style={styles.estiloTabla}>{this.props.goles}</Text>                            
            <Text style={styles.estiloTabla}>{this.props.apuesta}</Text> 
</View>
        )
    }
}
const styles = StyleSheet.create({
    estiloTabla: {
        color: 'orange',
        fontSize: 20,
        borderColor: 'orange',
        borderWidth: 3,
        padding: 20,
        flex: 1,
        height: 100,
    },
});