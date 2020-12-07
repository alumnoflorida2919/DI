import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    StatusBar,
    ScrollView,
} from 'react-native';

import { PlaceMyBetLogo } from '../component/PlaceMyBetLogo';
import { AdminUsuario } from '../component/AdminUsuario';
import { LabelData } from '../component/LabelData';
import { Input } from 'react-native-elements';
import { BotonOk } from '../component/BotonOk';

export default class FiltradoCuotas extends Component {
    render() {
        return (<View style={styles.backGround}>
            <StatusBar barStyle="dark-content" />
            <ScrollView>
                <PlaceMyBetLogo></PlaceMyBetLogo>
                <AdminUsuario></AdminUsuario>

                <Text></Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'column', width: 125 }}>
                        <LabelData></LabelData>
                        <Input style={styles.input}>__/__/____</Input>
                    </View>
                    <View style={{ flexDirection: 'column', width: 125 }}>
                        <LabelData></LabelData>
                        <Input style={styles.input}>__/__/____</Input>
                    </View>
                </View>
                <Text></Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <View style={{ flexDirection: 'column' }}>
                        <View>
                            <Text style={styles.estiloTabla}>DATO</Text>
                        </View>
                        <View>
                            <Text style={styles.estiloTabla}>DATO</Text>
                        </View>
                        <View>
                            <Text style={styles.estiloTabla}>DATO</Text>
                        </View>
                        <View>
                            <Text style={styles.estiloTabla}>DATO</Text>
                        </View>
                        <View>
                            <Text style={styles.estiloTabla}>DATO</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                        <View>
                            <Text style={styles.estiloTabla}>DATO</Text>
                        </View>
                        <View>
                            <Text style={styles.estiloTabla}>DATO</Text>
                        </View>
                        <View>
                            <Text style={styles.estiloTabla}>DATO</Text>
                        </View>
                        <View>
                            <Text style={styles.estiloTabla}>DATO</Text>
                        </View>
                        <View>
                            <Text style={styles.estiloTabla}>DATO</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                        <View>
                            <Text style={styles.estiloTabla}>DATO</Text>
                        </View>
                        <View>
                            <Text style={styles.estiloTabla}>DATO</Text>
                        </View>
                        <View>
                            <Text style={styles.estiloTabla}>DATO</Text>
                        </View>
                        <View>
                            <Text style={styles.estiloTabla}>DATO</Text>
                        </View>
                        <View>
                            <Text style={styles.estiloTabla}>DATO</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                        <View>
                            <Text style={styles.estiloTabla}>DATO</Text>
                        </View>
                        <View>
                            <Text style={styles.estiloTabla}>DATO</Text>
                        </View>
                        <View>
                            <Text style={styles.estiloTabla}>DATO</Text>
                        </View>
                        <View>
                            <Text style={styles.estiloTabla}>DATO</Text>
                        </View>
                        <View>
                            <Text style={styles.estiloTabla}>DATO</Text>
                        </View>
                    </View>
                </View>
                <Text></Text>
            </ScrollView>
            <BotonOk></BotonOk>
        </View>
        )
    }
}
const styles = StyleSheet.create({
    backGround: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
    },
    input: {
        flexDirection: 'column',
        width: 500,
        backgroundColor: 'grey',
        borderColor: 'orange',
        borderWidth: 4,
    },
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