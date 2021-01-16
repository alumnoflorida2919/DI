import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    StatusBar,
    ScrollView,
} from 'react-native';

import { PlaceMyBetLogo } from '../component/PlaceMyBetLogo';
import { Input, Image, Icon } from 'react-native-elements';
import { BotonOk } from '../component/BotonOk';
import { Usuario } from '../component/Usuario';

export default class Apostar extends Component {
    render() {
        return (
            <View style={styles.backGround}>
                <StatusBar barStyle="dark-content" />
                <ScrollView>
                    <PlaceMyBetLogo></PlaceMyBetLogo>
                    <Usuario></Usuario>

                    <Text></Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <View style={{ flexDirection: 'column' }}>
                            <Image
                                source={{
                                    uri:
                                        'https://seeklogo.com/images/V/Valencia-logo-1CD5C7F53E-seeklogo.com.png',
                                }}
                                style={{ width: 50, height: 75 }}
                            />

                        </View>
                        <View style={{ flexDirection: 'column' }}>
                            <Text>      </Text>
                        </View>
                        <View>
                            <Text style={{ color: 'white', fontSize: 50 }}>
                                VS
                    </Text>
                        </View>
                        <View style={{ flexDirection: 'column' }}>
                            <Text>      </Text>
                        </View>
                        <View>
                            <Image
                                source={{
                                    uri:
                                        'https://seeklogo.com/images/R/real-sociedad-logo-E1EA64206C-seeklogo.com.png',
                                }}
                                style={{ width: 50, height: 75 }}
                            />
                        </View>
                    </View>
                    <Text></Text>
                    <Text></Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <View style={{ flexDirection: 'column' }}>
                            <View>
                                <Text style={styles.estiloTablaCabecera}>DATO</Text>
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
                                <Text style={styles.estiloTablaCabecera}>DATO</Text>
                            </View>
                            <View>
                                <Text style={styles.estiloTabla}><Icon
                                    name='radio_button_checked' />DATO</Text>
                            </View>
                            <View>
                                <Text style={styles.estiloTabla}>
                                    <Icon
                                        name='radio_button_unchecked' />DATO</Text>
                            </View>
                            <View>
                                <Text style={styles.estiloTabla}>
                                    <Icon
                                        name='radio_button_unchecked' />DATO</Text>
                            </View>

                        </View>
                        <View style={{ flexDirection: 'column' }}>
                            <View>
                                <Text style={styles.estiloTablaCabecera}>DATO</Text>
                            </View>
                            <View>
                                <Text style={styles.estiloTabla}>
                                    <Icon
                                        name='radio_button_unchecked' />DATO</Text>
                            </View>
                            <View>
                                <Text style={styles.estiloTabla}>
                                    <Icon
                                        name='radio_button_unchecked' />DATO</Text>
                            </View>
                            <View>
                                <Text style={styles.estiloTabla}>
                                    <Icon
                                        name='radio_button_unchecked' />DATO</Text>
                            </View>
                        </View>
                    </View>
                    <Text></Text>
                    <View>
                        <Input style={styles.input}>
                        </Input>
                    </View>
                    <BotonOk></BotonOk>

                </ScrollView>
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
    estiloTabla: {
        color: 'orange',
        fontSize: 16,
        borderColor: 'orange',
        borderWidth: 3,
        padding: 30,
        flex: 1,
        height: 100,
        backgroundColor: 'white',
    },
    estiloTablaCabecera: {
        backgroundColor: 'orange',
        color: 'white',
        fontSize: 15,
        borderColor: 'orange',
        borderWidth: 3,
        padding: 30,
        flex: 1,
        height: 100,
    },
    input: {
        backgroundColor: 'white',
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        height: 60,
        paddingLeft: 25,
        paddingRight: 25,
        justifyContent: 'center',
        borderColor: 'blue',
        borderWidth: 1,
    },
});