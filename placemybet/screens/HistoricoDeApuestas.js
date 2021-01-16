import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    StatusBar,
    ScrollView,
} from 'react-native';

import { PlaceMyBetLogo } from '../component/PlaceMyBetLogo';
import { Image} from 'react-native-elements';
import { Usuario } from '../component/Usuario';

export default class HistoricoDeApuestas extends Component {
    render() {
        return (
            <View style={styles.backGround}>
                <StatusBar barStyle="dark-content" />
                <PlaceMyBetLogo></PlaceMyBetLogo>
                <Usuario></Usuario>
                <ScrollView>
                <View style={styles.cajasApuestas}>
                        <Image
                            source={{
                                uri:
                                    'https://seeklogo.com/images/V/Valencia-logo-1CD5C7F53E-seeklogo.com.png',
                            }}
                            style={{ width: 70, height: 95 }}
                        />
                        <View style={{ flexDirection: 'column' }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.guionApuestas}>10-08-20</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.guionApuestas}>Apuesta over</Text>
                            </View><View style={{ flexDirection: 'row' }}>
                                <Text style={styles.guionApuestas}>Apuesta 20€</Text>
                            </View><View style={{ flexDirection: 'row' }}>
                                <Text style={styles.guionApuestas}>Cuota 5.56€</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.cajasApuestas}>
                        <Image
                            source={{
                                uri:
                                    'https://seeklogo.com/images/V/Valencia-logo-1CD5C7F53E-seeklogo.com.png',
                            }}
                            style={{ width: 70, height: 95 }}
                        />
                        <View style={{ flexDirection: 'column' }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.guionApuestas}>10-08-20</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.guionApuestas}>Apuesta over</Text>
                            </View><View style={{ flexDirection: 'row' }}>
                                <Text style={styles.guionApuestas}>Apuesta 20€</Text>
                            </View><View style={{ flexDirection: 'row' }}>
                                <Text style={styles.guionApuestas}>Cuota 5.56€</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.cajasApuestas}>
                        <Image
                            source={{
                                uri:
                                    'https://seeklogo.com/images/V/Valencia-logo-1CD5C7F53E-seeklogo.com.png',
                            }}
                            style={{ width: 70, height: 95 }}
                        />
                        <View style={{ flexDirection: 'column' }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.guionApuestas}>10-08-20</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.guionApuestas}>Apuesta over</Text>
                            </View><View style={{ flexDirection: 'row' }}>
                                <Text style={styles.guionApuestas}>Apuesta 20€</Text>
                            </View><View style={{ flexDirection: 'row' }}>
                                <Text style={styles.guionApuestas}>Cuota 5.56€</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.cajasApuestas}>
                        <Image
                            source={{
                                uri:
                                    'https://seeklogo.com/images/V/Valencia-logo-1CD5C7F53E-seeklogo.com.png',
                            }}
                            style={{ width: 70, height: 95 }}
                        />
                        <View style={{ flexDirection: 'column' }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.guionApuestas}>10-08-20</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.guionApuestas}>Apuesta over</Text>
                            </View><View style={{ flexDirection: 'row' }}>
                                <Text style={styles.guionApuestas}>Apuesta 20€</Text>
                            </View><View style={{ flexDirection: 'row' }}>
                                <Text style={styles.guionApuestas}>Cuota 5.56€</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.cajasApuestas}>
                        <Image
                            source={{
                                uri:
                                    'https://seeklogo.com/images/V/Valencia-logo-1CD5C7F53E-seeklogo.com.png',
                            }}
                            style={{ width: 70, height: 95 }}
                        />
                        <View style={{ flexDirection: 'column' }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.guionApuestas}>10-08-20</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.guionApuestas}>Apuesta over</Text>
                            </View><View style={{ flexDirection: 'row' }}>
                                <Text style={styles.guionApuestas}>Apuesta 20€</Text>
                            </View><View style={{ flexDirection: 'row' }}>
                                <Text style={styles.guionApuestas}>Cuota 5.56€</Text>
                            </View>
                        </View>
                    </View>
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
        color: 'black',
        //display:'flex',
        //justifyContent:'center',
        //alignItems:'center',
        //textAlign:'center',
        fontSize: 20,
    }
});